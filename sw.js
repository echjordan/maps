if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    },(err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const SITE_CACHE = 'getWifi_Cache1'
const urlsToCache = ["/",
                    "/map",
                    "/map/dropins",
                    "/map/wifi",
                    "/map/links"]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SITE_CACHE)
      .then((cache) =>  cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((res) => {
        if (res) return res
        return fetch(event.request)
      })
  )
});
