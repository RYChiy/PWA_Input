
var version = '1.4.2';
var coreID = version + '_core';
var pageID = version + '_pages';
var imgID = version + '_img';
var cacheIDs = [coreID, pageID, imgID];
const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/logo.jpeg"
];

// On install, cache some stuff
self.addEventListener('install', function (event) {
	event.waitUntil(caches.open(cacheIDs).then(function (cache) {
		// Install my core files
        console.log(version);
	}));
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});



// On version update, remove old cached files
self.addEventListener('activate', function (event) {
	event.waitUntil(caches.keys().then(function (keys) {
		return Promise.all(keys.filter(function (key) {
			return !cacheIDs.includes(key);
		}).map(function (key) {
			return caches.delete(key);
		}));
	}).then(function () {
		return self.clients.claim();
	}));
});