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
const VERSION = "1";
/** @type string */
const CACHE_NAME = APP_PREFIX + "+" + VERSION;

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log("In fetch");
  e.respondWith(async () => {
    try {
      return await fetch(e.request);
    } catch (err) {
      return cachces.match(e.request);
    }
  });
})

// Cache resources
self.addEventListener('install', function (e) {
  console.log("Installing");
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Cache opened adding URLs");
      return cache.addAll(URLS).then(console.log, console.error);
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  console.log("In activate");
  e.waitUntil(
    caches.keys().then(keyList => {
      Promise.all(keyList.filter(key => key !== CACHE_NAME).map(key => {
        console.log("Delete cache: " + key);
        return caches.delete(key); 
      }));
    })
  );
})