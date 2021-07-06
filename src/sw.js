var cacheName = 'my-portfolio';
var filesToCache = [
  '/images/logo/bootstrap-5-1.svg',
  '/images/logo/css-3.svg',
  '/images/logo/github.svg',
  '/images/logo/gsap-greensock.svg',
  '/images/logo/html5.svg',
  '/images/logo/js.svg',
  '/images/logo/materialUI.svg',
  '/images/logo/mongodb-icon-1.svg',
  '/images/logo/Node.svg',
  '/images/logo/react.svg',
  '/images/logo/redux.svg',
  '/images/logo/SASS_Color.svg',
  '/images/logo/webpack.svg',
  '/images/projects/img_wideview.png',
  '/images/projects/scr_bulletinboard.jpg',
  '/images/projects/scr_myportfolio.png',
  '/images/projects/scr_newwavefestival.jpg',
  '/images/projects/scr_todo.png',
  '/images/projects/scr_travelagency.png',
  '/images/projects/scr_wideview.jpg',
  '/images/projects/scr_wideview_dashboard.png',
  '/images/projects/src_pizzeria.png',
  '/images/author3-kolor.png',
  '/images/portfolio-logo.png',
  '/images/portfolio-logo-kolor-na-bialym_small.svg',
  '/images/icons-heroku.svg',
  '/icons/icon-512x512.png',
  '/icons/icon-192x192.png',
  '/icons/icon-152x152.png',
  '/icons/icon-144x144.png',
  '/icons/icon-128x128.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});