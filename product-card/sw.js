self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open('store-app').then((cache) => cache.addAll([
      "/pwa-showcase/product-card/",
      "/pwa-showcase/product-card/index.html",
      "/pwa-showcase/product-card/style.css",
      "/pwa-showcase/product-card/app.js",
      "/pwa-showcase/product-card/images/daniel-andrade-_x35-CYxB2A-unsplash.jpg",
      "/pwa-showcase/product-card/images/gebhartyler-qIEIdW3jx2Q-unsplash.jpg",
      "/pwa-showcase/product-card/images/j-luis-esquivel-ArGvQkA7iOw-unsplash.jpg",
      "/pwa-showcase/product-card/images/jade-scarlato-uDhobOKOJyI-unsplash.jpg",
      "/pwa-showcase/product-card/images/jaelynn-castillo-xfNeB1stZ_0-unsplash.jpg",
      "/pwa-showcase/product-card/images/jye-b-DGyTUaS6_aw-unsplash.jpg",
      "/pwa-showcase/product-card/images/kaitlyn-baker-_ycEwyH8Nio-unsplash.jpg",
      "/pwa-showcase/product-card/images/nery-montenegro-SmEty_TVr80-unsplash.jpg",
      "/pwa-showcase/product-card/images/sirisvisual-1hbJKvK9Z8k-unsplash.jpg"
    ])),
  );
})

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  )
});
