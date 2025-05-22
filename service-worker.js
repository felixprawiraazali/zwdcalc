const CACHE_NAME = 'zwds-cache-v2.1'; // 🔁 bump this to force recache
const FILES_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/iztro.js',
  './js/branch.js',
  './js/palace.js',
  './js/stars_mapping.js',
  './js/transformation.js',
  './js/tailwind.js',
  './manifest.json',
  './img/192.png',
  './img/512.png',
  './font/avenir_roman_12.woff'
];

// Install: cache all static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('install', event => {
  self.skipWaiting(); // ⚠️ Force activation right after install
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

// Fetch: stale-while-revalidate + fallback for navigation
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle http and https requests
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return; // Skip chrome-extension, file://, etc.
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then(cachedPage => {
        return cachedPage || fetch('./index.html');
      })
    );
    return;
  }

  // Static assets (stale-while-revalidate strategy)
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith('http')) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {});

        return cachedResponse || fetchPromise;
      });
    })
  );
});
