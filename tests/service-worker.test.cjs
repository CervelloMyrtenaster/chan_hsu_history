const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
const base = 'https://example.test/chan_hsu_history/';

function setup(options = {}) {
  const handlers = {}, stores = new Map(), requests = [], writes = [];
  const state = { offline: false, failURL: null, wrongTypeURL: null, failWrites: false };
  const caches = {
    async open(name) {
      if (!stores.has(name)) stores.set(name, new Map());
      const entries = stores.get(name);
      return {
        async match(url) { return entries.get(typeof url === 'string' ? url : url.url)?.clone(); },
        async put(url, response) {
          if (state.failWrites) throw new Error('storage unavailable');
          writes.push(url);
          entries.set(url, response.clone());
        }
      };
    },
    async keys() { return [...stores.keys()]; },
    async delete(name) { return stores.delete(name); }
  };
  const fetch = async (url, settings) => {
    requests.push({ url, settings });
    if (state.offline || options.failCDN && url.startsWith('https://cdn.jsdelivr.net/')) throw new Error('offline');
    if (state.failURL === url) return new Response('server error', { status: 500 });
    const type = state.wrongTypeURL === url ? 'text/html' :
      url.endsWith('.html') ? 'text/html' : url.endsWith('.css') ? 'text/css' :
      url.endsWith('.json') ? 'application/json' : url.endsWith('.png') ? 'image/png' : 'application/javascript';
    return new Response(`network:${url}`, { headers: { 'Content-Type': `${type}; charset=utf-8` } });
  };
  vm.runInNewContext(source, {
    self: { registration: { scope: options.scope || base }, addEventListener: (name, fn) => handlers[name] = fn },
    caches, fetch, URL, Response, AbortController, setTimeout, clearTimeout,
    console: { warn() {} }
  });
  async function lifecycle(name) {
    const work = [];
    handlers[name]({ waitUntil: promise => work.push(promise) });
    await Promise.all(work);
  }
  async function request(url, settings = {}) {
    const work = [];
    let result;
    handlers.fetch({
      request: { url, method: settings.method || 'GET', mode: settings.mode || 'same-origin', headers: new Headers(settings.headers) },
      respondWith: promise => result = promise,
      waitUntil: promise => work.push(promise)
    });
    if (!result) return null;
    const response = await result;
    await Promise.all(work);
    return { response, backgroundWrites: work.length };
  }
  return { stores, requests, writes, state, lifecycle, request };
}

test('installation caches all core files, including data, with fixed CDN versions', async () => {
  const env = setup();
  await env.lifecycle('install');
  const core = [...env.stores].find(([name]) => name.endsWith('-core'))[1];
  assert.equal(core.size, 7);
  for (const file of ['index.html', 'style.css', 'app.js', 'data.js', 'manifest.json', 'icon-192.png', 'icon-512.png']) {
    assert.ok(core.has(base + file));
    assert.ok(fs.existsSync(path.join(root, file)));
  }
  assert.ok(env.requests.some(({ url }) => url.includes('chart.js@4.5.1/')));
  assert.ok(!env.requests.some(({ url }) => url.endsWith('icon-maskable.png') || url.endsWith('og-image.jpg')));
});

test('failed core response rejects installation and preserves the old release', async () => {
  const env = setup();
  env.stores.set('chan-hsu-history-old', new Map());
  env.state.failURL = base + 'data.js';
  await assert.rejects(env.lifecycle('install'));
  assert.deepEqual([...env.stores.keys()], ['chan-hsu-history-old']);
});

test('wrong content type and failed core storage reject installation', async () => {
  for (const failure of ['mime', 'storage']) {
    const env = setup();
    if (failure === 'mime') env.state.wrongTypeURL = base + 'app.js';
    else env.state.failWrites = true;
    await assert.rejects(env.lifecycle('install'));
    assert.equal(env.stores.size, 0);
  }
});

test('CDN failure does not invalidate the complete core installation', async () => {
  const env = setup({ failCDN: true });
  await env.lifecycle('install');
  assert.equal([...env.stores.values()][0].size, 7);
});

test('activation removes only this project old caches and does not force takeover', async () => {
  const env = setup();
  await env.lifecycle('install');
  env.stores.set('chan-hsu-history-old', new Map());
  env.stores.set('another-project-cache', new Map());
  await env.lifecycle('activate');
  assert.ok(!env.stores.has('chan-hsu-history-old'));
  assert.ok(env.stores.has('another-project-cache'));
  assert.ok([...env.stores.keys()].some(name => name.endsWith('-core')));
  assert.ok([...env.stores.keys()].some(name => name.endsWith('-optional')));
});

test('offline root, index, date, search and favorites navigation reuse the core HTML', async () => {
  const env = setup();
  await env.lifecycle('install');
  env.state.offline = true;
  for (const route of ['', 'index.html', '?month=10&day=2', '?search=test', 'index.html?view=favorites']) {
    const { response } = await env.request(base + route, { mode: 'navigate' });
    assert.equal(response.status, 200);
    assert.equal(await response.text(), `network:${base}index.html`);
  }
  const { response } = await env.request(base + 'data.js');
  assert.equal(response.status, 200);
});

test('core resources remain the installed snapshot without background network refresh', async () => {
  const env = setup();
  await env.lifecycle('install');
  const before = env.requests.length;
  for (const file of ['app.js', 'style.css', 'data.js']) assert.equal((await env.request(base + file)).response.status, 200);
  assert.equal(env.requests.length, before);
});

test('POST, Range, Worker, unknown queries, other projects and cross-origin URLs bypass the handler', async () => {
  const env = setup();
  for (const [url, settings] of [
    [base + 'app.js', { method: 'POST' }], [base + 'data.js', { headers: { Range: 'bytes=0-100' } }],
    [base + 'service-worker.js', {}], [base + 'app.js?unknown=1', {}], [base + 'og-image.jpg', {}],
    ['https://example.test/another-project/', { mode: 'navigate' }],
    ['https://example.test/', { mode: 'navigate' }], [base + 'missing.html', { mode: 'navigate' }],
    ['https://external.test/file.js', {}]
  ]) assert.equal(await env.request(url, settings), null);
  assert.equal(env.requests.length, 0);
});

test('manifest is network-first, lifetime-protected, and falls back on HTTP failure or offline', async () => {
  const env = setup();
  await env.lifecycle('install');
  const fresh = await env.request(base + 'manifest.json');
  assert.equal(fresh.backgroundWrites, 1);
  const optional = [...env.stores].find(([name]) => name.endsWith('-optional'))[1];
  assert.ok(optional.has(base + 'manifest.json'));
  env.state.failURL = base + 'manifest.json';
  assert.equal((await env.request(base + 'manifest.json')).response.status, 200);
  env.state.offline = true;
  optional.delete(base + 'manifest.json');
  assert.equal((await env.request(base + 'manifest.json')).response.status, 200);
});

test('optional cache writes are awaited and storage failure does not break a network response', async () => {
  const env = setup();
  await env.lifecycle('install');
  const saved = await env.request(base + 'icon-180.png');
  assert.equal(saved.backgroundWrites, 1);
  env.state.failWrites = true;
  assert.equal((await env.request(base + 'icon-maskable.png')).response.status, 200);
});

test('missing offline files produce an explicit 503 rather than HTML in a script response', async () => {
  const env = setup();
  env.state.offline = true;
  const { response } = await env.request(base + 'app.js');
  assert.equal(response.status, 503);
  assert.match(response.headers.get('content-type'), /^text\/plain/);
});

test('scope-relative asset resolution also works for a user-site root', async () => {
  const env = setup({ scope: 'https://example.test/' });
  await env.lifecycle('install');
  env.state.offline = true;
  assert.equal((await env.request('https://example.test/?search=test', { mode: 'navigate' })).response.status, 200);
});

test('manifest identity, scope, icon dimensions and HTML dependency URL remain consistent', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  assert.equal(new URL(manifest.start_url, base + 'manifest.json').pathname, '/chan_hsu_history/index.html');
  assert.equal(manifest.id, '/chan_hsu_history/index.html');
  assert.equal(new URL(manifest.scope, base + 'manifest.json').href, base);
  for (const icon of manifest.icons) {
    const bytes = fs.readFileSync(path.join(root, icon.src));
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(icon.sizes, `${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`);
    assert.equal(icon.type, 'image/png');
  }
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(html.includes('https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js'));
});
