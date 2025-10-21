const CACHE_NAME = 'store-app-v1';
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/daniel-andrade-_x35-CYxB2A-unsplash.jpg",
  "/images/gebhartyler-qIEIdW3jx2Q-unsplash.jpg",
  "/images/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg",
  "/images/jade-scarlato-uDhobOKOJyI-unsplash.jpg",
  "/images/jaelynn-castillo-xfNeB1stZ_0-unsplash.jpg",
  "/images/jye-b-DGyTUaS6_aw-unsplash.jpg",
  "/images/kaitlyn-baker-_ycEwyH8Nio-unsplash.jpg",
  "/images/nery-montenegro-SmEty_TVr80-unsplash.jpg",
  "/images/sirisvisual-1hbJKvK9Z8k-unsplash.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
})

self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request)
     .then(cachedResponse => {
       // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key)
            return caches.delete(key)
          }
        }))
      })
      .then(() => self.clients.claim())
  )
})
