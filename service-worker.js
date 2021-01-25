const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";
const OFFLINE_URL = "./offline.html";

const assets = [
  './',
  './menu.html',
  './play.html',
  './styles/base.css',
  './styles/game.css',
  './styles/home.css',
  './sounds/splat.mp3',
  './scripts/home.js',
  './scripts/scripts.js',
  './images/blood.gif',
  './images/monster.gif',
  './images/sand.png',
  'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(assets, { cache: 'reload' });
    })()
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(event.request);
          return cachedResponse;
        }
      })()
    );
});