const CACHE_NAME = 'zwds-cache-v1';
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle navigation requests (e.g., for HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then((cachedPage) => {
        return cachedPage || fetch('./index.html');
      })
    );
    return;
  }

  // For other assets, try cache first, then network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
