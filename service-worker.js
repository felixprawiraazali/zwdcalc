const CACHE_NAME = 'zwds-cache-v2'; // 🔁 bump this to force recache
const FILES_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/iztro.js',
  './js/stars_mapping.js',
  './js/transformation.js',
  './js/tailwind.js',
  './manifest.json',
  './img/192.png',
  './img/512.png'
];

// Install: cache all static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate: clean up old cache versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch: stale-while-revalidate + fallback for navigation
self.addEventListener('fetch', event => {
  // Handle navigation requests (HTML with query params)
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
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => { /* offline or failed */ });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
