'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "782e5d7e2ae16a67ce38cdf0d6c8bc96",
"main.dart.js": "9a05ad933aef0bb01ede0820fc949f43",
"version.json": "9bd366ae7e2bd098e01fc371564007ea",
"index.html": "01e5f93b5fb97319333108ba0a3b1a75",
"/": "01e5f93b5fb97319333108ba0a3b1a75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/FontManifest.json": "e26fd45067a684c98345a55f498be7af",
"assets/AssetManifest.json": "150ef43992d471acc46ccfb2eb9ae3b7",
"assets/NOTICES": "5b723cdccc531b3e2341c7c9004e9690",
"assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/graphics/graphic_01.png": "fb278cceac1ddf381cf8f7901b5569a7",
"assets/assets/graphics/graphic_01.jpg": "fad70e9a9e6c965a7f5b05f74303a3fb",
"assets/assets/graphics/background.jpg": "287d885ebd0ccd475e710410d1adddca",
"assets/assets/graphics/graphic_main.png": "4d1fac953bb4415b1bbd77e7491ba6c4",
"assets/assets/graphics/map2.png": "ee0c04af3ec63bdd052e6cb8c35fd438",
"assets/assets/graphics/brain.png": "f6a8eee6dd6939bf79ef1d4230173e89",
"assets/assets/graphics/main_graphic.png": "aea27db337abd412b46b1b40948bd8a9",
"assets/assets/graphics/graphic_main_grey_shadow.png": "5069541853c18236a8e14892ad459c86",
"assets/assets/graphics/mobile_iso_1.png": "1d5a46f1ecfbdde312ae49ee0c785ff0",
"assets/assets/graphics/graphic_02.png": "52bb3eaff40770976074bd6251fb0b7e",
"assets/assets/graphics/map.png": "ced8cce28e6fa63ca6b848a43385bd2f",
"assets/assets/icons/google_play_store.png": "952533e45b9f950cafd0313660b7cb8f",
"assets/assets/icons/blogger.png": "a567bc2ededda382a1ce9ce6bd5caf30",
"assets/assets/icons/skype.png": "6abb2db7205d2b8f393237eaeb1e39c7",
"assets/assets/icons/flutter.png": "b8b3588052a713d47bb7f7249d26c9ee",
"assets/assets/icons/facebook.png": "2ddb87a78bf3ae4c667a31c5b9c35683",
"assets/assets/icons/instagram.png": "19366556d7857c40fcb0149fb8d207dc",
"assets/assets/icons/git_hub.png": "bd9f762428702b5639a75e452bf795e7",
"assets/assets/mobile_app_portfolios/seven_minute_workout.png": "287f726b2043b1dfaee48a1b79fb2d96",
"assets/assets/mobile_app_portfolios/workout_burpees.png": "e0b2514a110f7d3ab95f459224deef1e",
"assets/assets/mobile_app_portfolios/epwa_traffic.png": "c8ee6d384cb86f082cb27d7e54b00ccd",
"assets/assets/mobile_app_portfolios/abc_krwiodawcy.png": "d9aaa3b8ae11744b0d9da63ebe1550fd",
"assets/assets/mobile_app_portfolios/switch_off_all_bulbs.png": "2fda5b27d10d086396718547b75fd0f3",
"assets/assets/mobile_app_portfolios/workout_sit_ups.png": "9501ed025bcad692e6cee3e0c732c8a1",
"assets/assets/mobile_app_portfolios/iss_tracker.png": "1788c21923a8d10e830f4680f3db178d",
"assets/assets/mobile_app_portfolios/card_codes.png": "c707b07d5d53ba7cad3d2243b4ad1ca9",
"assets/assets/mobile_app_portfolios/workout_squats.png": "bcc9a91e535aea858fafccf1844a86b1",
"assets/assets/mobile_app_portfolios/workout_dips.png": "61e423590d144aeed631efa179959ec5",
"assets/assets/mobile_app_portfolios/workout_push_ups.png": "b534c484b1de78d012af72c4b79927a3",
"assets/assets/mobile_app_portfolios/airshow_radom.png": "0f07144375a4a0446b9cb4b63bb9c7f0",
"assets/assets/mobile_app_portfolios/country_quiz.png": "f20c8f5225a38408f130ff837b58d4ac",
"assets/assets/mobile_app_portfolios/speed_limits_europe.png": "91e97801fdd35f1d8793124411dea71c",
"assets/assets/mobile_app_portfolios/workout_pull_ups.png": "ed92dea8b27650a43f4e2a70a30e5734",
"assets/assets/mobile_app_portfolios/kody_ussd.png": "9546ab0241f6a0fe6194dbd1afc6c611",
"assets/assets/mobile_app_portfolios/tablice.png": "54cae9494715ec9179cb825438080eb4",
"assets/assets/mobile_app_portfolios/matrix_cleaner.png": "3f3e889b55531ac5ab453e5abdd66720"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
