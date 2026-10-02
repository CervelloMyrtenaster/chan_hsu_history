const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8').replace(/\r\n/g, '\n');

// Exercise the actual rendering functions without adding browser dependencies
// or exposing application internals in production.
function section(start, end) {
  const from = source.indexOf(start), to = source.indexOf(end, from);
  assert.ok(from >= 0 && to > from, `Missing source section: ${start}`);
  return source.slice(from, to);
}
class Element {
  constructor() {
    this.children = []; this.attributes = new Map(); this.style = {}; this.dataset = {};
    this.classList = { add() {}, remove() {} }; this.scrollTop = 0;
  }
  get isConnected() { return this.root || Boolean(this.parent?.isConnected); }
  appendChild(child) {
    if (child.fragment) child.children.forEach(node => this.appendChild(node));
    else { child.parent = this; this.children.push(child); }
    return child;
  }
  append(...children) { children.forEach(child => this.appendChild(child)); }
  replaceChildren(...children) {
    this.children.forEach(node => { node.parent = null; }); this.children = [];
    this.append(...children);
  }
  setAttribute(name, value) { this.attributes.set(name, value); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  removeAttribute(name) { this.attributes.delete(name); }
}
function setup() {
  const jobs = new Map(); let nextJob = 0;
  const content = new Element(); content.root = true;
  const env = {
    contentDiv: content, sidebar: new Element(), dashboard: new Element(),
    quizContainer: new Element(), clozeContainer: new Element(),
    dom: { dashboardBtn: new Element(), 'year-filter': { value: 'all' } },
    timers: { content: null, search: null }, viewState: { name: 'main', search: 'needle' },
    firstContentRender: true, pendingContentUpdate: null, resumeSearch: null,
    stopSpeech() {}, populateYearFilter() {}, createTrendChart() {}, refreshDashboard() {}, trendChartInstance: {},
    performance: { now: () => 0 }, getFavorites: () => [],
    recordIndex: Array.from({ length: 120 }, (_, i) => ({ label: `needle ${i}`, content: '' })),
    createSearchResult(record) { const node = new Element(); node.textContent = record.label; return node; },
    document: {
      createElement: () => new Element(),
      createDocumentFragment: () => Object.assign(new Element(), { fragment: true })
    },
    setTimeout(fn) { const id = ++nextJob; jobs.set(id, fn); return id; },
    clearTimeout(id) { jobs.delete(id); }
  };
  vm.createContext(env);
  for (const [start, end] of [
    ['function clearTimer(', 'function stopSpeech('],
    ['function showView(', 'const yearRegex'],
    ['function toggleDashboard(', '// 建立左側'],
    ['function createSearchPage(', 'function searchRecords(']
  ]) vm.runInContext(section(start, end), env);
  function flush() {
    let iterations = 0;
    while (jobs.size) {
      assert.ok(++iterations < 1000, 'Rendering did not finish');
      const [id, fn] = jobs.entries().next().value; jobs.delete(id); fn();
    }
  }
  return { env, content, jobs, flush };
}
function startSearch(env) {
  const page = env.createSearchPage('needle');
  env.updateContentWithFade(page.container, page.startRemaining);
  return page.container;
}
test('dashboard return resumes all search batches and clears aria-busy', () => {
  const { env, jobs, flush } = setup(), container = startSearch(env);
  assert.equal(container.children.length, 51); // Heading plus first 50 matches.
  env.toggleDashboard(); assert.equal(jobs.size, 0);
  env.toggleDashboard(); flush();
  assert.equal(container.children.length, 121);
  assert.equal(container.getAttribute('aria-busy'), null);
  assert.equal(env.resumeSearch, null);
});
test('dashboard return commits a cancelled fade and completes its search', () => {
  const { env, content, flush } = setup();
  const old = new Element(); content.appendChild(old); env.firstContentRender = false;
  const container = startSearch(env);
  assert.equal(content.children[0], old);
  env.toggleDashboard(); env.toggleDashboard(); flush();
  assert.equal(content.children[0], container);
  assert.equal(container.children.length, 121);
  assert.equal(env.pendingContentUpdate, null);
});
test('completed pages keep their DOM and scroll position on dashboard return', () => {
  const { env, content, flush } = setup(), container = startSearch(env); flush();
  content.scrollTop = 321;
  env.toggleDashboard(); env.toggleDashboard(); flush();
  assert.equal(content.children[0], container);
  assert.equal(content.scrollTop, 321);
  assert.equal(container.children.length, 121);
});
test('a newer page replaces cancelled work without resuming the old search', () => {
  const { env, content, flush } = setup(), old = startSearch(env);
  env.toggleDashboard(); env.showView('main');
  env.viewState.search = null;
  const newer = new Element(); env.updateContentWithFade(newer);
  env.toggleDashboard(); env.toggleDashboard(); flush();
  assert.equal(content.children[0], newer);
  assert.equal(old.children.length, 51);
  assert.equal(env.resumeSearch, null);
});
test('favorite buttons retain a record-specific name and expose both toggle states', () => {
  const { env } = setup(); env.createRecordContent = () => new Element();
  vm.runInContext(section('function updateFavoriteButton(', '// 顯示記錄(日期頁面)'), env);
  const item = { label: '2026年2月8日 測試記錄' };
  const record = env.createRecordElement(item, '2-8-3');
  const button = record.children[1], name = button.getAttribute('aria-label');
  assert.ok(name.includes(item.label));
  assert.equal(button.getAttribute('aria-pressed'), 'false');
  env.updateFavoriteButton(button, true);
  assert.equal(button.getAttribute('aria-pressed'), 'true');
  assert.equal(button.getAttribute('aria-label'), name);
  assert.equal(button.title, '取消收藏');
  env.updateFavoriteButton(button, false);
  assert.equal(button.getAttribute('aria-pressed'), 'false');
});
test('back-to-top respects reduced motion while retaining normal smooth scrolling', () => {
  for (const reduced of [true, false]) {
    const handlers = {}; let scroll;
    const env = {
      dom: { backToTopBtn: { addEventListener: (name, fn) => handlers[name] = fn } },
      contentDiv: { addEventListener() {}, scrollTo: settings => scroll = settings },
      window: { matchMedia: () => ({ matches: reduced }) }
    };
    vm.runInNewContext(section('    // 回到頂部按鈕功能', '\n}\n\n// 展旭歷史王'), env);
    handlers.click();
    assert.equal(scroll.top, 0);
    assert.equal(scroll.behavior, reduced ? 'auto' : 'smooth');
  }
});

test('white statistic labels meet normal-text contrast across the entire gradient', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'style.css'), 'utf8');
  const gradient = css.match(/--stat-gradient:\s*linear-gradient\(135deg,\s*(#[\da-f]{6}) 0%,\s*(#[\da-f]{6}) 100%\)/i);
  assert.ok(gradient);
  const rgb = hex => hex.slice(1).match(/../g).map(pair => parseInt(pair, 16));
  const from = rgb(gradient[1]), to = rgb(gradient[2]);
  const labels = css.match(/\.stat-label\s*\{([^}]+)\}/)[1];
  const opacity = Number(labels.match(/opacity:\s*([\d.]+)/)?.[1] || 1);
  const luminance = rgb => rgb.map(value => {
    const n = value / 255; return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
  }).reduce((sum, value, i) => sum + value * [0.2126, 0.7152, 0.0722][i], 0);
  for (let step = 0; step <= 500; step++) {
    const background = from.map((value, i) => value + (to[i] - value) * step / 500);
    const foreground = background.map(value => value * (1 - opacity) + 255 * opacity);
    const contrast = (luminance(foreground) + 0.05) / (luminance(background) + 0.05);
    assert.ok(contrast >= 4.5, `Gradient contrast ${contrast} at ${step / 500}`);
  }
});

test('heatmap keyboard navigation skips empty dates and follows responsive columns', () => {
  const env = {};
  vm.runInNewContext(section('function heatmapDestination(', 'function bindModernUI('), env);
  const cells = Array.from({ length: 60 }, () => ({ tagName: 'DIV' }));
  for (const index of [2, 4, 28, 54]) cells[index].tagName = 'BUTTON';
  assert.equal(env.heatmapDestination(cells, 2, 'ArrowRight', 26), 4);
  assert.equal(env.heatmapDestination(cells, 2, 'ArrowDown', 26), 28);
  assert.equal(env.heatmapDestination(cells, 2, 'ArrowDown', 52), 54);
  assert.equal(env.heatmapDestination(cells, 54, 'ArrowRight', 52), 54);
  assert.equal(env.heatmapDestination(cells, 28, 'Home', 26), 2);
  assert.equal(env.heatmapDestination(cells, 28, 'End', 26), 54);
});

test('appearance respects saved light/dark and follows system only when selected', () => {
  const env = {
    appearance: 'system', systemAppearance: { matches: true },
    document: { body: { classList: { toggle: (name, value) => { env.dark = value; } } } },
    dom: { 'theme-toggle': {}, 'year-filter': { value: '2024' } },
    viewState: { name: 'main' }, trendChartInstance: null, createWordCloud() {}
  };
  vm.runInNewContext(section('function applyAppearance(', 'function heatmapDestination('), env);
  env.applyAppearance('light'); assert.equal(env.dark, false);
  env.applyAppearance('dark'); assert.equal(env.dark, true);
  env.applyAppearance('system'); assert.equal(env.dark, true);
  env.systemAppearance.matches = false;
  env.applyAppearance('system'); assert.equal(env.dark, false);
  env.applyAppearance(null); assert.equal(env.dom['theme-toggle'].value, 'system');
});

test('trend table remains complete when the optional chart library is unavailable', () => {
  const env = {
    ui: { 'trend-series': new Element(), 'trend-data': new Element() },
    document: { createElement: () => Object.assign(new Element(), { addEventListener() {} }),
      createTextNode: text => Object.assign(new Element(), { textContent: text }) }
  };
  vm.runInNewContext(section('function renderTrendData(', 'function renderWordCloudTerms('), env);
  env.renderTrendData([{ label: '2024年', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]);
  const table = env.ui['trend-data'];
  assert.equal(table.children[1].children[0].children.length, 13);
  const row = table.children[2].children[0];
  assert.equal(row.children[0].textContent, '2024年');
  assert.deepEqual(row.children.slice(1).map(cell => cell.textContent), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.equal(env.ui['trend-series'].children[0].children[0].disabled, true);
});

test('share feedback preserves a selectable URL when clipboard access fails', async () => {
  for (const clipboardFails of [false, true]) {
    let notice;
    const env = {
      URLSearchParams, window: { location: { search: '?search=台灣', href: 'https://example.com/history/' } },
      location: { origin: 'https://example.com', pathname: '/history/' },
      viewState: { search: '台灣' },
      navigator: { clipboard: { async writeText() { if (clipboardFails) throw new Error('Denied'); } } },
      notify: (...args) => { notice = args; }, console
    };
    vm.runInNewContext(section('async function shareCurrentView(', '// sidebar highlight'), env);
    await env.shareCurrentView();
    if (clipboardFails) assert.equal(notice[1], 'https://example.com/history/?search=%E5%8F%B0%E7%81%A3');
    else assert.equal(notice[0], '分享連結已複製到剪貼簿！');
  }
});
