/* global self */
/* eslint-disable no-restricted-globals */

self.addEventListener('install', event => {
  event.waitUntil(caches
    .open('rtivital.github.io/react-pages-boilerplate')
    .then(cache => cache.addAll(['/', '/index.html', '/bundle.js', '/main.css'])));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
