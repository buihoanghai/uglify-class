var brotliSize = require('brotli-size');
const fs = require("fs");
fs.readFile("after.html", 'utf8', function (err, data) {
	console.log(data.length); // 165

	console.log(brotliSize.sync(data)); // 118
});

fs.readFile("before.html", 'utf8', function (err, data) {
	console.log(data.length); // 165

	console.log(brotliSize.sync(data)); // 118
});