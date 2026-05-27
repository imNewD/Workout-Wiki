const APP_CACHE = 'grnd-shell-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './favicon.ico',
  './apple-touch-icon.png',
  './manifest.json',
  './media/themes.css',
  './media/animations.js',
  './anatomy.js',
  './DevNotes.js',
  './library/warmup-data.js',
  './library/pushup-data.js',
  './library/chinup-data.js',
  './library/pullup-data.js',
  './library/combo-data.js',
  './library/weighted-data.js',
  './library/dip-data.js',
  './library/squats-data.js',
  './library/core-data.js',
  './library/handstand-data.js',
  './library/isometric-data.js',
  './library/frontlever-data.js',
  './library/backlever-data.js',
  './library/pantheon-data.js',
  './library/programs-data.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_CACHE).then(cache =>
      Promise.all(CORE_ASSETS.map(asset =>
        cache.add(asset).catch(err => {
          console.warn('[SW] Failed to cache', asset, err);
          return Promise.resolve();
        })
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key !== APP_CACHE)
        .map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== location.origin) return;

  event.respondWith(
    caches.open(APP_CACHE).then(cache =>
      cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    ).catch(() => {
      if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
        return caches.match('./').then(fallback =>
          fallback || caches.match('./index.html') || caches.match('/')
        );
      }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url && client.url.indexOf(self.registration.scope) === 0) {
          return client.focus();
        }
      }
      return clients.openWindow(self.registration.scope || '/');
    })
  );
});
