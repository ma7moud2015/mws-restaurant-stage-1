if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/sw.js").then(reg => {
		console.log("service worker regist ok" + reg.scope);
	}).catch(error => {
		console.log("reg failed" + error);
	});
}
