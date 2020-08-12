'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/package.json": "1772811b33648cb1c112f164df308cce",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "782e5d7e2ae16a67ce38cdf0d6c8bc96",
"/main.dart.js": "7e6db45e6f1f1c52c188e381b7c14519",
"/index.html": "41bdd1a42a27c226936205ea669ed351",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"/assets/FontManifest.json": "75098836e6a9bf8037df6d9e73abff1d",
"/assets/LICENSE": "663f2c5610677491b18e753ef506a8aa",
"/assets/AssetManifest.json": "75dedbb52b40ba4f8587eaee4ee66e51",
"/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/graphics/graphic_01.png": "fb278cceac1ddf381cf8f7901b5569a7",
"/assets/assets/graphics/graphic_01.jpg": "fad70e9a9e6c965a7f5b05f74303a3fb",
"/assets/assets/graphics/background.jpg": "287d885ebd0ccd475e710410d1adddca",
"/assets/assets/graphics/graphic_main.png": "4d1fac953bb4415b1bbd77e7491ba6c4",
"/assets/assets/graphics/map2.png": "ee0c04af3ec63bdd052e6cb8c35fd438",
"/assets/assets/graphics/brain.png": "f6a8eee6dd6939bf79ef1d4230173e89",
"/assets/assets/graphics/main_graphic.png": "aea27db337abd412b46b1b40948bd8a9",
"/assets/assets/graphics/graphic_main_grey_shadow.png": "5069541853c18236a8e14892ad459c86",
"/assets/assets/graphics/mobile_iso_1.png": "1d5a46f1ecfbdde312ae49ee0c785ff0",
"/assets/assets/graphics/graphic_02.png": "52bb3eaff40770976074bd6251fb0b7e",
"/assets/assets/graphics/map.png": "ced8cce28e6fa63ca6b848a43385bd2f",
"/assets/assets/icons/google_play_store.png": "952533e45b9f950cafd0313660b7cb8f",
"/assets/assets/icons/blogger.png": "a567bc2ededda382a1ce9ce6bd5caf30",
"/assets/assets/icons/skype.png": "6abb2db7205d2b8f393237eaeb1e39c7",
"/assets/assets/icons/flutter.png": "b8b3588052a713d47bb7f7249d26c9ee",
"/assets/assets/icons/facebook.png": "2ddb87a78bf3ae4c667a31c5b9c35683",
"/assets/assets/icons/instagram.png": "19366556d7857c40fcb0149fb8d207dc",
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
