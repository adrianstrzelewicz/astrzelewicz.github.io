'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "782e5d7e2ae16a67ce38cdf0d6c8bc96",
"/main.dart.js": "9dd79ac9d0ea5f41fcc3fbe4cf0e77c5",
"/index.html": "69f7d42b6488b42153f0578f7d9778af",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "c1369e1a7b6aa51eef6205147c563d0e",
"/assets/LICENSE": "926eed461c2eced26ce79b28b110c646",
"/assets/AssetManifest.json": "dd54be08f71f83ae536f47bd21e0e6e2",
"/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/graphics/background.jpg": "287d885ebd0ccd475e710410d1adddca",
"/assets/assets/icons/google_play_store.png": "952533e45b9f950cafd0313660b7cb8f",
"/assets/assets/icons/blogger.png": "a567bc2ededda382a1ce9ce6bd5caf30",
"/assets/assets/icons/git_hub.png": "bd9f762428702b5639a75e452bf795e7",
"/assets/assets/mobile_app_portfolios/seven_minute_workout.png": "287f726b2043b1dfaee48a1b79fb2d96",
"/assets/assets/mobile_app_portfolios/epwa_traffic.png": "eb194199d677e03bbb1546eee84ac502",
"/assets/assets/mobile_app_portfolios/abc_krwiodawcy.png": "d9aaa3b8ae11744b0d9da63ebe1550fd",
"/assets/assets/mobile_app_portfolios/switch_off_all_bulbs.png": "2fda5b27d10d086396718547b75fd0f3",
"/assets/assets/mobile_app_portfolios/workout_sit_ups.png": "9501ed025bcad692e6cee3e0c732c8a1",
"/assets/assets/mobile_app_portfolios/workout_squats.png": "bcc9a91e535aea858fafccf1844a86b1",
"/assets/assets/mobile_app_portfolios/workout_dips.png": "61e423590d144aeed631efa179959ec5",
"/assets/assets/mobile_app_portfolios/workout_push_ups.png": "b534c484b1de78d012af72c4b79927a3",
"/assets/assets/mobile_app_portfolios/airshow_radom.png": "0f07144375a4a0446b9cb4b63bb9c7f0",
"/assets/assets/mobile_app_portfolios/country_quiz.png": "f20c8f5225a38408f130ff837b58d4ac",
"/assets/assets/mobile_app_portfolios/speed_limits_europe.png": "91e97801fdd35f1d8793124411dea71c",
"/assets/assets/mobile_app_portfolios/workout_pull_ups.png": "ed92dea8b27650a43f4e2a70a30e5734",
"/assets/assets/mobile_app_portfolios/kody_ussd.png": "9546ab0241f6a0fe6194dbd1afc6c611",
"/assets/assets/mobile_app_portfolios/tablice.png": "54cae9494715ec9179cb825438080eb4",
"/assets/assets/mobile_app_portfolios/matrix_cleaner.png": "3f3e889b55531ac5ab453e5abdd66720"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
