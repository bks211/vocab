/* 最小 service worker：让浏览器认为这是一个可安装的应用 */
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  /* 不拦截请求，交给网络；这里存在只是满足安装条件 */
});
