// 每次發布 HTML、CSS、JS 或資料變更時，都必須更新此版本。
const CACHE_PREFIX = 'chan-hsu-history-';
const RELEASE = '20261002-pwa-v4';
const CORE_CACHE = `${CACHE_PREFIX}${RELEASE}-core`;
const OPTIONAL_CACHE = `${CACHE_PREFIX}${RELEASE}-optional`;
const BASE_URL = new URL('./', self.registration.scope);
const INDEX_URL = new URL('index.html', BASE_URL).href;
const MANIFEST_URL = new URL('manifest.json', BASE_URL).href;

const CORE_ASSETS = new Map([
  ['index.html', 'html'], ['style.css', 'css'], ['app.js', 'javascript'],
  ['data.js', 'javascript'], ['manifest.json', 'json'],
  ['icon-192.png', 'png'], ['icon-512.png', 'png']
].map(([path, type]) => [new URL(path, BASE_URL).href, type]));

// 固定版本的外部套件可離線使用，但不能阻止核心版本安裝。
const DEPENDENCIES = new Map([
  ['https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js', 'javascript'],
  ['https://cdn.jsdelivr.net/npm/wordcloud@1.2.2/src/wordcloud2.js', 'javascript']
]);
const OPTIONAL_ASSETS = new Map([
  ...DEPENDENCIES,
  ...['icon-152.png', 'icon-167.png', 'icon-180.png', 'icon-maskable.png']
    .map(path => [new URL(path, BASE_URL).href, 'png'])
]);
const CONTENT_TYPES = {
  html: ['text/html'], css: ['text/css'],
  javascript: ['text/javascript', 'application/javascript', 'application/x-javascript'],
  json: ['application/json', 'application/manifest+json'], png: ['image/png']
};

async function fetchValidated(url, type, timeout = 0, consumeResponse = null) {
  const controller = new AbortController();
  let timer;
  const deadline = timeout ? new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new Error(`Request timed out: ${url}`));
    }, timeout);
  }) : null;
  const download = async () => {
    const response = await fetch(url, { mode: 'cors', cache: 'no-cache', signal: controller.signal });
    const contentType = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    if (response.status !== 200 || !CONTENT_TYPES[type].includes(contentType)) {
      throw new Error(`Invalid ${type} response: ${url} (${response.status}, ${contentType})`);
    }
    // Install-time consumers keep the deadline active through body download
    // and cache storage; ordinary fetch handlers retain streaming responses.
    return consumeResponse ? await consumeResponse(response) : response;
  };
  try {
    return await (deadline ? Promise.race([download(), deadline]) : download());
  } finally {
    clearTimeout(timer);
  }
}

function unavailableResponse() {
  return new Response('此內容目前無法載入，請連線後再試。', {
    status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      // 先確認全部核心回應有效，再寫入新版本；失敗不能取代舊 Worker。
      const responses = await Promise.all([...CORE_ASSETS].map(async ([url, type]) =>
        [url, await fetchValidated(url, type)]));
      const core = await caches.open(CORE_CACHE);
      await Promise.all(responses.map(([url, response]) => core.put(url, response)));
    } catch (error) {
      await caches.delete(CORE_CACHE);
      throw error;
    }
    await Promise.all([...DEPENDENCIES].map(async ([url, type]) => {
      try {
        await fetchValidated(url, type, 10000, async response => {
          const optional = await caches.open(OPTIONAL_CACHE);
          await optional.put(url, response);
        });
      } catch (error) {
        console.warn('可選離線套件未快取：', url, error);
      }
    }));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) &&
      name !== CORE_CACHE && name !== OPTIONAL_CACHE).map(name => caches.delete(name)));
  })());
  // 不使用 skipWaiting / clients.claim，讓既有頁面完成後才切換版本。
});

async function cachedOrNetwork(event, url, type, cacheName, saveResponse = false) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(url);
    if (cached) return cached;
  } catch (error) {
    console.warn('無法讀取離線快取：', error);
  }
  try {
    const response = await fetchValidated(url, type, 10000);
    if (saveResponse) {
      const copy = response.clone();
      event.waitUntil(caches.open(cacheName).then(cache => cache.put(url, copy))
        .catch(error => console.warn('無法寫入離線快取：', error)));
    }
    // 核心快照不逐項覆寫，避免背景更新造成混合版本。
    return response;
  } catch (error) {
    return unavailableResponse();
  }
}

async function fetchManifest(event) {
  try {
    const response = await fetchValidated(MANIFEST_URL, 'json', 5000);
    const copy = response.clone();
    event.waitUntil(caches.open(OPTIONAL_CACHE).then(cache => cache.put(MANIFEST_URL, copy))
      .catch(error => console.warn('無法更新 manifest 快取：', error)));
    return response;
  } catch (error) {
    try {
      const optional = await caches.open(OPTIONAL_CACHE);
      const core = await caches.open(CORE_CACHE);
      return await optional.match(MANIFEST_URL) || await core.match(MANIFEST_URL) || unavailableResponse();
    } catch (cacheError) {
      return unavailableResponse();
    }
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range')) return;
  const url = new URL(request.url);
  if (!['http:', 'https:'].includes(url.protocol)) return;

  // 只將本站兩個 HTML 入口的導覽對應到固定 HTML，保留地址列的查詢參數。
  if (request.mode === 'navigate') {
    if (url.origin === BASE_URL.origin &&
        (url.pathname === BASE_URL.pathname || url.pathname === new URL(INDEX_URL).pathname)) {
      event.respondWith(cachedOrNetwork(event, INDEX_URL, 'html', CORE_CACHE));
    }
    return;
  }
  if (url.href === MANIFEST_URL) {
    event.respondWith(fetchManifest(event));
  } else if (CORE_ASSETS.has(url.href)) {
    event.respondWith(cachedOrNetwork(event, url.href, CORE_ASSETS.get(url.href), CORE_CACHE));
  } else if (OPTIONAL_ASSETS.has(url.href)) {
    event.respondWith(cachedOrNetwork(event, url.href, OPTIONAL_ASSETS.get(url.href), OPTIONAL_CACHE, true));
  }
  // Worker 本身、分享圖片、非白名單網址及其他專案交由瀏覽器正常處理。
});
