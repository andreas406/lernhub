const CACHE_NAME = 'lernhub-v7';
const SHELL_FILES = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './fonts/fonts.css',
  './fonts/FiraSansCondensed-400.woff2',
  './fonts/FiraSansCondensed-600.woff2',
  './fonts/FiraSansCondensed-700.woff2',
  './fonts/FiraCode-400.woff2',
  './modules/_k7/engine.css',
  './modules/_k7/engine.js'
];

// Install: Shell-Dateien cachen
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activate: alte Caches löschen
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: immer erst Netz (damit neue Inhalte sofort da sind), sonst Cache
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
