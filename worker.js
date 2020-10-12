const filesToCache = [
	"ClassroomPhaser.htm",
	"ClassroomPhaser.json",
	"ClassroomPhaser.png",
	"ClassroomPhaserBoard.htm",
	"ClassroomPhaserBoard.js",
	"ClassroomPhaserFavIcon_16x16.png",
	"ClassroomPhaserFavIcon_192x192.png",
	"ClassroomPhaserFavIcon_512x512.png",
	"ClassroomPhaserShare.png"
];

const staticCacheName = "classroomphaser-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});