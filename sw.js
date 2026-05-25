/* ══ GRND SERVICE WORKER ════════════════════════════════════
   Caches core assets for offline use.
   Update CACHE_NAME version when you make major changes.
════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'grnd-v1';

const CORE_ASSETS = [
  '/Workout-Wiki/',
  '/Workout-Wiki/index.html',
  '/Workout-Wiki/manifest.json',
  '/Workout-Wiki/favicon.svg',
  '/Workout-Wiki/favicon.ico',
  '/Workout-Wiki/apple-touch-icon.png',
  '/Workout-Wiki/icons/icon-192.png',
  '/Workout-Wiki/icons/icon-512.png',
];

// Install — cache core assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[GRND SW] Caching core assets');
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        // Cache new successful responses dynamically
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    }).catch(function() {
      // Offline fallback
      return caches.match('/Workout-Wiki/');
    })
  );
});
