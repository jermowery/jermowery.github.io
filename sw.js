const APP_PREFIX = 'Recipes_';     // Identifier for this app (this needs to be consistent across every cache update)
const URLS = [                            
  '/',                     
  '/index.html',
  '/recipes',
  '/recipes/',
  '/recipes/index.html',
  "/recipes/tags.html",
  '/recipes?source=pwa',
  '/recipes/?source=pwa',
  '/recipes/index.html?source=pwa',
  '/assets/css/style.css',
  '/favicon.ico',
];
/** @type string */
const VERSION = new URL(location).searchParams.get('version') || "local";
/** @type string */
const CACHE_NAME = APP_PREFIX + VERSION;

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        return request
      } else {
        return fetch(e.request)
      }
    })
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      for(const url of URLS) {
        cache.add(url);
      }
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(keyList => {
      const oldCaches = keyList.filter(key => key !== CACHE_NAME);
      Promise.all(oldCaches.map(key => caches.delete(key)));
    })
  );
})