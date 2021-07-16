/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c3d68cfb29d2a89af42c651350e7e5b"
  },
  {
    "url": "assets/css/0.styles.305e47ad.css",
    "revision": "e86d890c5806c36f24f66b38c13e0d52"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ccc36be7.js",
    "revision": "5fb32b7e68ee5fb99d4223f3838b53aa"
  },
  {
    "url": "assets/js/11.ab4db403.js",
    "revision": "3d4e0a8fcea6e00c1b1df0c5c42849d4"
  },
  {
    "url": "assets/js/12.1f540a5b.js",
    "revision": "30ecd3bd41dfc7d3d4df8a22480f58aa"
  },
  {
    "url": "assets/js/13.83fe607b.js",
    "revision": "01dda93f5c10e9e1ee6fcafa5367b435"
  },
  {
    "url": "assets/js/14.8c7efb21.js",
    "revision": "4abc7accda5c9b5d2c82a4a390f1749e"
  },
  {
    "url": "assets/js/15.a379bc9c.js",
    "revision": "81d0ee06a00b6dbf71953812eaddd43a"
  },
  {
    "url": "assets/js/16.bd19e412.js",
    "revision": "f5c048d9682ee088b956744730491641"
  },
  {
    "url": "assets/js/17.5942c35b.js",
    "revision": "71cd34ca34c82965fec45359b6f2efb4"
  },
  {
    "url": "assets/js/18.4738593c.js",
    "revision": "e75914318d45d6af125760710e53c2bd"
  },
  {
    "url": "assets/js/4.d59f4fc8.js",
    "revision": "1422861e8b1862ebb348a69c45e2e86a"
  },
  {
    "url": "assets/js/5.c57c3a10.js",
    "revision": "f1ddf45fc1905fe90c78a903e6747aa5"
  },
  {
    "url": "assets/js/6.139dccb9.js",
    "revision": "1478b880a8698b4b78c905589c80f8dd"
  },
  {
    "url": "assets/js/7.afd745b9.js",
    "revision": "748214941e8c74c14520fd710d27780c"
  },
  {
    "url": "assets/js/8.a0081c7e.js",
    "revision": "434e440991dab1c915605af2d4c5eccb"
  },
  {
    "url": "assets/js/9.2e5f72b7.js",
    "revision": "d1badb7fe1a8ba916d6e95fb42b8016f"
  },
  {
    "url": "assets/js/app.128462c4.js",
    "revision": "f9800f7260dd8c9b6651e458a9e8e114"
  },
  {
    "url": "assets/js/vendors~flowchart.292f02c3.js",
    "revision": "c15614723b75f5e0dca5b99264255fd0"
  },
  {
    "url": "assets/js/vendors~notification.4fd649ec.js",
    "revision": "8e0b66833ae16638de1bbe805fea7460"
  },
  {
    "url": "images/javaTKBJ-1.jpeg",
    "revision": "fbead4ad1ef7e7232d78fd94b52c8313"
  },
  {
    "url": "index.html",
    "revision": "c7717cb3d2db4447db49f7e908abaf72"
  },
  {
    "url": "mysql/index.html",
    "revision": "c99edaa3788cecabb708499bd92bfef6"
  },
  {
    "url": "mysql/mysql-index-1.html",
    "revision": "498e0ad0c6d85c82293613362a3d174c"
  },
  {
    "url": "mysql/mysql-index-2.html",
    "revision": "c5fcf003ba80b5d5931e5a7f3c47b050"
  },
  {
    "url": "mysql/mysql-index-3.html",
    "revision": "7c510be4e9fe1c3ba84722c7ce32fea5"
  },
  {
    "url": "test/experiment-md.html",
    "revision": "e03aeefe84ad613037dc55dc24adf030"
  },
  {
    "url": "test/index.html",
    "revision": "8b531d228c5638ee69e0f4af9116aaee"
  },
  {
    "url": "test/jmh-tutorial.html",
    "revision": "349d83e2278e0f4f4e5f48115344d4fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
