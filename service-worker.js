// 快取的名稱加上版本號
const CACHE_NAME = 'chan-hsu-history-20251024-2330';

// 需要被快取的核心檔案
const urlsToCacheOnInstall = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './og-image.jpg',
    './icon-152.png',
    './icon-167.png',
    './icon-180.png',
    './icon-192.png',
    './icon-512.png',
    './icon-maskable.png',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://cdn.jsdelivr.net/npm/wordcloud@1.2.2/src/wordcloud2.js'
];

// 1. 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching app shell including new icons');
        return cache.addAll(urlsToCacheOnInstall)
          .catch(error => {
            console.error('Failed to cache during install:', error);
          });
      })
  );
});

// 2. 攔截網路請求 網路優先策略
self.addEventListener('fetch', event => {
  event.respondWith(
    // (1) 先嘗試從網路獲取
    fetch(event.request)
      .then(networkResponse => {
        // (2) 如果網路請求成功
        // 檢查回應是否有效
        if (!networkResponse || networkResponse.status !== 200 || !['http:', 'https:'].includes(new URL(networkResponse.url).protocol)) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
            // console.log('Fetched from network and cached:', event.request.url);
          });
        return networkResponse;
      })
      .catch(error => {
        // (3) 如果網路請求失敗 例如離線
        console.log('Network request failed for:', event.request.url, 'Attempting to serve from cache.');
        return caches.match(event.request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              console.log('Not found in cache either:', event.request.url);
              return new Response("Network error and resource not found in cache.", {
                status: 404,
                statusText: "Not Found"
              });
            }
          });
      })
  );
});

// 3. 啟用 Service Worker 並清除舊快取
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});