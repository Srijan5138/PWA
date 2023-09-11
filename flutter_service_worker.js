'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7deac357bdbafdfce6e68db3084fabe3",
"assets/AssetManifest.json": "63b2fed71437dea014376989352c3daa",
"assets/assets/Cellapp.png": "17507aaed38dd2c391a1ecd47d7cf806",
"assets/assets/emblem.png": "b6d313fb70c8751945f2bfe349c3a3a9",
"assets/assets/fb.svg": "9dc7a3557ca8d5efdfb50d2a06fa075f",
"assets/assets/featured.png": "7441241374f896bdb0620999a76d40c5",
"assets/assets/graph.png": "9f226e999c42bee90b6cfdcda3161146",
"assets/assets/I1.png": "24aa7c139d15841b0a3354e382c8918e",
"assets/assets/I2.png": "a8189031b45b1a248e3f559f2e816567",
"assets/assets/I3.png": "0d3cf5920eaea193466d51c1223ba2cf",
"assets/assets/icons/aboutus.svg": "74af7392b14d379d98fa4d73cc5b693c",
"assets/assets/icons/activities.svg": "86d2342d26e5e5897aa7d4e56e3303e0",
"assets/assets/icons/activity.svg": "ec684bd70ac691efea6a679509c26d2c",
"assets/assets/icons/career.svg": "e1e0d90fdc8a6a2593131c5deeb874ae",
"assets/assets/icons/circle.svg": "be1f4366cbfdb81fe4e111d002865203",
"assets/assets/icons/doublearrow.svg": "7e03bafb8e08113331e6fa31cf2f76a7",
"assets/assets/icons/download.svg": "c919d52ccbb7c7ba5655ac3889ec27b8",
"assets/assets/icons/dropdown.svg": "fdaeabbf30b039dc379c7378145b24f3",
"assets/assets/icons/eye.svg": "14149c238b959f5fc551ec915307a425",
"assets/assets/icons/facebook-logo.png": "942ea3b4c9258c2d98d6182c7b826e57",
"assets/assets/icons/facebook.svg": "6b446a380e308ad3d84cf955d088f3be",
"assets/assets/icons/fb.png": "ff489a2f38cff400385628fa0bb753a2",
"assets/assets/icons/fbsvg.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/icons/home.svg": "99e7c0b53290b6b1b3dd0de6887d6af0",
"assets/assets/icons/instagram.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/notice.svg": "ff02e61d63d308af686ae063c05576e8",
"assets/assets/icons/notices.svg": "9bb2acf6a981ea0775a46f2f91bdc944",
"assets/assets/icons/partnership.svg": "4e98c86b8a8f1226d17255be8ef5d229",
"assets/assets/icons/resources.svg": "7d9ed14bc65b3ec9b9f37b78edb5cec4",
"assets/assets/icons/service1.svg": "d46eb86c762050787f155a75cb294647",
"assets/assets/icons/service10.svg": "e9758e3bd9a70844d188f01d90971f47",
"assets/assets/icons/service11.svg": "e4944ff0cec0fba078c7bf58d8b60f27",
"assets/assets/icons/service12.svg": "f65a82af52fc7e1b5aecbc49a05a30e8",
"assets/assets/icons/service2.svg": "e0cc17f00495c7a97af40f6dfa2dccad",
"assets/assets/icons/service3.svg": "8a6ace9781c5aab06173db068e3e2414",
"assets/assets/icons/service4.svg": "164b9a4fad699a0b3ceb370bd01b89b3",
"assets/assets/icons/service5.svg": "29e2543c2979c413a2fc224ff7ce7942",
"assets/assets/icons/service6.svg": "4be009adc33b997df53bfd0f4b2ccbd2",
"assets/assets/icons/service7.svg": "c27f5c83595cf7fcbf70ca61d7eecfc5",
"assets/assets/icons/service8.svg": "c752b97c893c9b4c2aedce468fe189fc",
"assets/assets/icons/service9.svg": "f2d3731611d9ef296ccd0057446c3083",
"assets/assets/icons/svgfb.svg": "c5c697b743bdd92ec6e98a8fc661f4fd",
"assets/assets/icons/twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/assets/icons/youtube.svg": "6c3781437eadf78643698de65b648042",
"assets/assets/image.jpg": "4c1f801fc3d94db94d6b27953c7d5c7f",
"assets/assets/insta.svg": "5861c18d4997bf1550bc3c93695cf997",
"assets/assets/khim.jpg": "35f3b12cd8efcdb4e1d2fc19c1624312",
"assets/assets/latest1.png": "05f7e6b18271a718d19ab72f78ecfd4f",
"assets/assets/latest2.png": "aa9a7b7f4dddbaeca38050b07006e34a",
"assets/assets/light-bulb.png": "1e5daa112931ae8e4f048b53622a19cb",
"assets/assets/map.jpg": "ce78297a44c3bfa83bd96a88961a175a",
"assets/assets/media1.png": "b0abb293618f22bc07083e9812f3e417",
"assets/assets/media2.jpg": "dcc7ae21fb55c3d6d8e6746076dec175",
"assets/assets/media3.png": "b309ba9e11268afcd8642494f0071df5",
"assets/assets/narmin.jpg": "1545787554b3c82f96c993d3929dfb91",
"assets/assets/narmin2.jpg": "3af12a1112f7dbfae0d708ce04d29abd",
"assets/assets/NarminLogo.png": "483cd1447879250e95be57511e2ab923",
"assets/assets/narmin_logo.png": "8248e1f1b98a75da0b76007a9bda45ed",
"assets/assets/newheader": "bb81cff28ab4fa5f0480feeb1c7f9d7a",
"assets/assets/organizationalStructure.png": "1274c7cbee1564945c29bcc3b753f62d",
"assets/assets/partners/AllienceforSocialDialogue.jpg": "4a6256a18c064a19312ed58038d5643e",
"assets/assets/partners/CareNepal.png": "370d4521bb81f53c18cfa3c410a75ce1",
"assets/assets/partners/giz-logo.gif": "624927535615737a9e205acf7e441e1f",
"assets/assets/partners/giz.jpg": "3e002061c5425e9e70ddf311ad2f2c2f",
"assets/assets/partners/International.png": "6ea528a6d5dbb8e90b28c721a637ea52",
"assets/assets/partners/open-society-foundation.jpg": "240a26b811c1e1fac6abb6f44b6f629a",
"assets/assets/partners/TheAsiaFoundation.png": "b7d1b676b200b6cb3ff3098c5363c21b",
"assets/assets/partners/UCLG-ASPAC-Logo.png": "50dc9f0fab3fa21748bb943507c038fc",
"assets/assets/partners/UnicefNepal.png": "e44903f35ba7a8caf3bf30cb556c819e",
"assets/assets/partners/USAID.png": "9de648e5ef1ed86029e6b247237438d3",
"assets/assets/partners/WorldVision.png": "40125e0c902a5111e3b7c9d122cbbb8e",
"assets/assets/pdf/guidelines/1.jpg": "af7d3da82b858a7ec18767dc6b331b7d",
"assets/assets/pdf/guidelines/2.jpg": "d8726967c4474ffa0acf7534bb37901b",
"assets/assets/pdf/guidelines/3.jpg": "37623b24c4c7581ce42ce9c2d13f2079",
"assets/assets/pdf/guidelines/4.jpg": "a907c89c538b129179ee7b13023572ab",
"assets/assets/pdf/guidelines/5.jpg": "ecda88ebb40ce52cdc190d13c2329514",
"assets/assets/pdf/guidelines/6.jpg": "8982302f8dd8b2521a155ef2dcf5eec1",
"assets/assets/pdf/guidelines/7.jpg": "857690d19c22935d34cb9a0d5fa7f768",
"assets/assets/pdf/knowledge_product/1.jpg": "501834b42c561cfe2ffeadbe7175d1f2",
"assets/assets/pdf/knowledge_product/2.jpg": "c7ba2da84279346cbabc3a816dff177a",
"assets/assets/pdf/knowledge_product/3.jpg": "16b7717f6e42dd55255d0c11ccada402",
"assets/assets/pdf/knowledge_product/4.jpg": "62b212889278b8971c020e357268b0e2",
"assets/assets/pdf/knowledge_product/5.jpg": "a6448dc34dc60157b50610f694944d41",
"assets/assets/photo.png": "7aa94544855c63cab5dd73480b70bc82",
"assets/assets/rajendra.jpg": "7bd07a3fe48dd91f4910118ba1f35ee3",
"assets/assets/repre1.png": "c162b96860ea6a947d3454455b36d5fc",
"assets/assets/repre2.png": "610c82634f3a01476cc87ad2c54830fb",
"assets/assets/repre3.png": "367ea9c7e8a01396949d378026223ae0",
"assets/assets/shared-vision.png": "4b942bb4cf7caa753024f4c4cdd9d4cf",
"assets/assets/target.png": "cbc50fe8c184fe1c63328f4f990365a5",
"assets/assets/tw.svg": "85fddc78b644ba4eef3ab2fc0d5b0afa",
"assets/assets/user.png": "1a8e1263d942b5766a5d20b23f43dc16",
"assets/assets/Vectormap.svg": "7bbd2f3551df13ee49548778ce006de8",
"assets/assets/Vectorsearch.svg": "c48e2c06df755b9544ec987509669613",
"assets/assets/yt.svg": "4309d221b69ef5dcb9f4c7ec2580ecb6",
"assets/FontManifest.json": "e25c505507e2d3ccf9188f95147c58df",
"assets/fonts/MaterialIcons-Regular.otf": "c7c30c647b1bdfb785949350f24164df",
"assets/NOTICES": "4b78394630830912171f46edbbf93f62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e5ba06a8b15037983ee67407095c2f4",
"/": "1e5ba06a8b15037983ee67407095c2f4",
"main.dart.js": "8b29901f758a349748c8494621772e5f",
"manifest.json": "059fa260b969c9a81c8bb6c013bbed31",
"version.json": "83f91731cc1fd59318d3b76f73fb34c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
