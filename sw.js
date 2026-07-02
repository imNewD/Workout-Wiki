/* ══════════════════════════════════════════════════════════════════
   sw.js — GRND // Workout Wiki service worker
   ──────────────────────────────────────────────────────────────────
   This file was referenced by index.html's registration call but
   never existed — so registration 404'd silently and the alarm
   engine's SCHEDULE_ALARM messages went nowhere. That is why
   notifications died the moment the app was closed.

   What this worker provides:
     • ALARMS — alarms are persisted in IndexedDB (SW-side, survives
       worker termination) and re-armed every single time the worker
       wakes up (activate, message, fetch, periodicsync, sync,
       notificationclick). Due alarms fire an OS notification via
       registration.showNotification, which works while the tab is
       backgrounded or closed (as long as the browser itself runs).
     • PERIODIC WAKE — where Periodic Background Sync is available
       (installed PWA on Chromium/Android), the page registers a
       'grnd-alarm-check' task so the browser wakes this worker to
       fire alarms even with no tab open at all.
     • APP-SHELL PRECACHE — on install, fetches the live index.html and
       parses its own <script src> / <link href> tags to build the
       precache list, instead of a hand-maintained file list (the prior
       version on GitHub hardcoded paths like ./library/pushup-data.js
       and ./media/themes.css from before this project was restructured
       into src/assets/config/data — those all 404'd, so nothing ever
       actually got precached and first-launch-offline silently failed).
       Self-updates whenever index.html's own tags change.
     • OFFLINE-LIGHT — same-origin GETs are served
       stale-while-revalidate so the app opens offline after the
       first visit; navigations that fail with nothing cached fall
       back to the precached shell page. Bump SW_VERSION to force-
       refresh the cache.

   Honest platform limits: a static site has no push server, so with
   the browser fully quit nothing can execute — the missed alarm
   fires as a "came due while you were away" notification on next
   browser/app launch instead of being lost.
══════════════════════════════════════════════════════════════════ */
'use strict';

const SW_VERSION = 'grnd-sw-v2';
const CACHE_NAME = SW_VERSION + '-static';
const SHELL_URL  = './index.html';

/* ── IndexedDB alarm store (SW context has no localStorage) ─────── */
const DB_NAME = 'grnd-sw';
const STORE   = 'alarms';

function dbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) {
        req.result.createObjectStore(STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => reject(req.error);
  });
}
function dbPut(alarm) {
  return dbOpen().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(alarm);
    tx.oncomplete = () => resolve();
    tx.onerror    = () => reject(tx.error);
  })).catch(() => {});
}
function dbDelete(id) {
  return dbOpen().then(db => new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror    = () => reject(tx.error);
  })).catch(() => {});
}
function dbAll() {
  return dbOpen().then(db => new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror   = () => reject(req.error);
  })).catch(() => []);
}

/* ── Alarm arming & firing ──────────────────────────────────────── */
/* In-memory timers only live while the worker is alive — that's fine,
   because checkDueAlarms() re-arms everything from IndexedDB on every
   worker wake-up, and fires anything that came due in between. */
const _timers = new Map();

function _clearTimer(id) {
  if (_timers.has(id)) { clearTimeout(_timers.get(id)); _timers.delete(id); }
}

function armAlarm(alarm) {
  _clearTimer(alarm.id);
  const delay = alarm.fireAt - Date.now();
  if (delay <= 0) { fireAlarm(alarm, -delay > 60000); return; }
  _timers.set(alarm.id, setTimeout(() => fireAlarm(alarm, false), Math.min(delay, 0x7fffffff)));
}

function fireAlarm(alarm, late) {
  _clearTimer(alarm.id);
  dbDelete(alarm.id);
  const title = alarm.label || 'Reminder';
  const body  = late
    ? 'This reminder came due while you were away.'
    : 'Time for: ' + (alarm.label || 'your reminder') + '.';
  self.registration.showNotification(title, {
    body,
    tag: alarm.id,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    vibrate: [120, 60, 120],
    data: { id: alarm.id },
  }).catch(() => {});
  // Let any open pages clean up their localStorage copy + play sound
  self.clients.matchAll({ type: 'window' }).then(cs =>
    cs.forEach(c => c.postMessage({ type: 'ALARM_FIRED', id: alarm.id })));
}

function checkDueAlarms() {
  return dbAll().then(alarms => {
    const now = Date.now();
    alarms.forEach(a => {
      if (a.fireAt <= now) fireAlarm(a, now - a.fireAt > 60000);
      else armAlarm(a);
    });
  });
}

/* ── App-shell precache ───────────────────────────────────────────
   Reads index.html itself to find what to precache, rather than a
   hand-maintained list that silently rots when files move (see the
   header note above). Best-effort: any single asset failing to fetch
   doesn't block install, and a total failure (e.g. installing while
   offline) just leaves precache empty — the runtime stale-while-
   revalidate cache in the fetch handler fills it in on first visit. */
function precacheShell() {
  return caches.open(CACHE_NAME).then(cache =>
    fetch(SHELL_URL, { cache: 'no-store' }).then(res => {
      if (!res.ok) return;
      return res.clone().text().then(html => {
        const urls = new Set([SHELL_URL, './', 'manifest.json']);
        const re = /(?:src|href)\s*=\s*["']([^"']+)["']/g;
        let m;
        while ((m = re.exec(html))) {
          const u = m[1];
          if (/^(https?:)?\/\//.test(u) || u.startsWith('data:')) continue; // skip cross-origin (fonts etc.)
          if (!/\.(js|css|svg|png|jpg|jpeg|webp|json)(\?|$)/i.test(u)) continue;
          urls.add(u);
        }
        return cache.put(SHELL_URL, res).then(() =>
          Promise.all([...urls].map(u =>
            fetch(u).then(r => { if (r.ok) return cache.put(u, r); }).catch(() => {})
          ))
        );
      });
    }).catch(() => {})
  );
}

/* ── Lifecycle ──────────────────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(precacheShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    self.clients.claim(),
    checkDueAlarms(),
    // Drop caches from older SW versions
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )),
  ]));
});

/* ── Messages from the page (GRNDAlarm module) ──────────────────── */
self.addEventListener('message', event => {
  const d = event.data || {};
  if (d.type === 'SCHEDULE_ALARM' && d.alarm) {
    dbPut(d.alarm); armAlarm(d.alarm);
  } else if (d.type === 'CANCEL_ALARM' && d.id) {
    _clearTimer(d.id); dbDelete(d.id);
  } else if (d.type === 'SYNC_ALARMS' && Array.isArray(d.alarms)) {
    d.alarms.forEach(a => { dbPut(a); armAlarm(a); });
    checkDueAlarms();
  }
});

/* ── Background wake-ups ────────────────────────────────────────── */
self.addEventListener('periodicsync', event => {
  if (event.tag === 'grnd-alarm-check') event.waitUntil(checkDueAlarms());
});
self.addEventListener('sync', event => {
  if (event.tag === 'grnd-alarm-check') event.waitUntil(checkDueAlarms());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      for (const c of cs) { if ('focus' in c) return c.focus(); }
      return self.clients.openWindow('./');
    })
  );
});

/* ── Offline-light: stale-while-revalidate for same-origin GETs ──
   Every fetch also re-arms alarms if the worker was just woken cold
   (the timer map being empty is the tell). */
self.addEventListener('fetch', event => {
  if (!_timers.size) event.waitUntil(checkDueAlarms());

  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(req).then(cached => {
        const network = fetch(req).then(resp => {
          if (resp && resp.ok) cache.put(req, resp.clone());
          return resp;
        }).catch(() =>
          cached || (isNavigation ? cache.match(SHELL_URL) : undefined)
        );
        return cached || network;
      })
    )
  );
});
