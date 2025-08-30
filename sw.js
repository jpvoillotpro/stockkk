const CACHE_NAME = 'stockkk';
const URLS_TO_CACHE = [
  '/',
  'index.html' // Assurez-vous que votre fichier s'appelle bien index.html
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );

});
