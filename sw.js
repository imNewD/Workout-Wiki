const CACHE_NAME  = 'grnd-v2'; // bump this when you deploy changes
const FONTS_CACHE = 'grnd-fonts-v1';

const CORE_ASSETS = [
  '/Workout-Wiki/',
  '/Workout-Wiki/index.html',
  '/Workout-Wiki/anatomy.js',
  '/Workout-Wiki/manifest.json',
  '/Workout-Wiki/favicon.svg',
  '/Workout-Wiki/favicon.ico',
  '/Workout-Wiki/apple-touch-icon.png',
  '/Workout-Wiki/media/animations.js',
  '/Workout-Wiki/icons/icon-192.png',
  '/Workout-Wiki/icons/icon-512.png',
];

// Install — cache core assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) { return cache.addAll(CORE_ASSETS); })
      .then(function() { return self.skipWaiting(); }) // ← inside waitUntil
  );
});

// Activate — clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(k) { return k !== CACHE_NAME && k !== FONTS_CACHE; })
          .map(function(k)   { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); }) // ← inside waitUntil
  );
});

// Fetch — route by origin
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  var url = new URL(event.request.url);

  // Google Fonts — stale-while-revalidate so they're always fast + stay fresh
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONTS_CACHE).then(function(cache) {
        return cache.match(event.request).then(function(cached) {
          var fetchPromise = fetch(event.request).then(function(response) {
            if (response && response.status === 200) cache.put(event.request, response.clone());
            return response;
          }).catch(function() { return cached; });
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // Everything else — cache-first, update cache in background
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(cached) {
        var fetchPromise = fetch(event.request).then(function(response) {
          // ← removed the 'basic' check so cors responses also get cached
          if (response && response.status === 200) cache.put(event.request, response.clone());
          return response;
        }).catch(function() { return cached; });
        return cached || fetchPromise; // serve cache instantly, refresh behind the scenes
      });
    }).catch(function() {
      return caches.match('/Workout-Wiki/index.html');
    })
  );
});
