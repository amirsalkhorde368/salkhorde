self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('water-app-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        'https://cdn.tailwindcss.com',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
