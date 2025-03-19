const CACHE_NAME = 'chat-app-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  // Add your CSS, JS, and image files as needed.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
