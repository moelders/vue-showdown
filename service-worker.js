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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e76748bf112ba2d31edbf3c7767203bc"
  },
  {
    "url": "assets/css/0.styles.487bc46b.css",
    "revision": "d054e19b018dc39a62db38076c0b258e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3f3def6c.js",
    "revision": "8bf0bfa862cf560a3ec99cbd31dbb23a"
  },
  {
    "url": "assets/js/2.19c1567b.js",
    "revision": "67d941ced6b5539e46c26ca044c6eda3"
  },
  {
    "url": "assets/js/3.364a5f5d.js",
    "revision": "5e91b37127434de5dffb0c3229f67f0b"
  },
  {
    "url": "assets/js/4.80d14f2c.js",
    "revision": "f4c07d7d8dbf8ca566fc2b8aa98cb3c7"
  },
  {
    "url": "assets/js/5.be838a8a.js",
    "revision": "d9de806f268507281c998acbdff9c8b9"
  },
  {
    "url": "assets/js/6.b943466e.js",
    "revision": "fddf88ac19c6c45606af0e2cd43e28ce"
  },
  {
    "url": "assets/js/7.995510b5.js",
    "revision": "fbca93ecf1ea95f967d86ccb60cb11bb"
  },
  {
    "url": "assets/js/8.6896f082.js",
    "revision": "cd4a0be46d60627488152c1da83d7f93"
  },
  {
    "url": "assets/js/app.b421954d.js",
    "revision": "87d2e29580ea3dec5b337f03e8383136"
  },
  {
    "url": "guide/index.html",
    "revision": "9f441d100f43c466989cb8b0fc2577ce"
  },
  {
    "url": "index.html",
    "revision": "c64d839bd0b18e8f9e37b87bb5f16fb3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "playground/index.html",
    "revision": "71f6d9df63e90a35da2a6ddb0d75bf09"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "00b9c10ff486eae5645319340b1e141a"
  },
  {
    "url": "zh/index.html",
    "revision": "e2b1ba503077fc162539e62102bfbcfd"
  },
  {
    "url": "zh/playground/index.html",
    "revision": "89c688e08471cb1b207f046f40f923bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
