if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const SITE_CACHE = 'getWifi_Cache1'
const urlsToCache = ["/", "/client/map.jsx", "/client/Root.js", "/public/bundle.js", "/public/index.html", "server/index.js", "/public/style.css", "/public/index.html"]

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(SITE_CACHE)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then((res) => {
        if(res){
          return res
        }
      return fetch(event.request)
  })
  )
});
