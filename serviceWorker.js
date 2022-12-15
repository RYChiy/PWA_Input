// This is the service worker code

// This is the list of assets that will be cached by the service worker
var assetsToCache = [
    "/css/styles.css",
    "/js/app.js",
    "/images/logo.jpeg"
  ];

  // This is the install event, which is triggered when the service worker is installed
  self.addEventListener("install", function(event) {
    // Open a cache and add the assets to it
    event.waitUntil(
      caches.open("myCache").then(function(cache) {
        return cache.addAll(assetsToCache);
      })
    );
  });
  
  // This is the fetch event, which is triggered when the service worker receives a network request
  self.addEventListener("fetch", function(event) {
    // Respond to the request with the cached asset, if it exists, or with a network request
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
    );
  });