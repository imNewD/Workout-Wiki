/* ══════════════════════════════════════════════════════
   GRND // Workout Wiki — Service Worker
   Caches the app shell so GRND loads offline.
   Strategy: cache-first for static assets,
             network-first for the HTML entry point.
══════════════════════════════════════════════════════ */

const CACHE = 'grnd-v1';

const PRECACHE = [
  '/Workout-Wiki/',
  '/Workout-Wiki/index.html',
  '/Workout-Wiki/media/themes.css',
  '/Workout-Wiki/media/animations.js',
  '/Workout-Wiki/favicon.svg',
  '/Workout-Wiki/apple-touch-icon.png',
  '/Workout-Wiki/manifest.json',
  /* Exercise data */
  '/Workout-Wiki/library/warmup-data.js',
  '/Workout-Wiki/library/pushup-data.js',
  '/Workout-Wiki/library/chinup-data.js',
  '/Workout-Wiki/library/pullup-data.js',
  '/Workout-Wiki/library/combo-data.js',
  '/Workout-Wiki/library/weighted-data.js',
  '/Workout-Wiki/library/dip-data.js',
  '/Workout-Wiki/library/squats-data.js',
  '/Workout-Wiki/library/core-data.js',
  '/Workout-Wiki/library/handstand-data.js',
  '/Workout-Wiki/library/isometric-data.js',
  '/Workout-Wiki/library/frontlever-data.js',
  '/Workout-Wiki/library/backlever-data.js',
  '/Workout-Wiki/library/pantheon-data.js',
];

/* ── Install: pre-cache app shell ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

/* ── Activate: purge old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first for assets, network-first for HTML ── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip non-GET and cross-origin requests (e.g. Google Fonts, YouTube) */
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  /* HTML: network-first so updates are always picked up */
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  /* Everything else: cache-first */
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(request, clone));
        return res;
      });
    })
  );
});
