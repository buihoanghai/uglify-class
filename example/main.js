const replaceClasses = require("../libs/replace-classes");
const tableData1 = require("./class-table2");
const dir = require("../libs/dir");
const globule = require('globule');
const _ = require('lodash');
const fs = require("fs");
replaceClasses.setClassesTable(tableData1);

// fs.readFile("test-output/test.html", 'utf8', function (err, data) {
// 	console.time("replace");
// 	let result = replaceClasses.uglifyClass(data);
// 	console.timeEnd("replace");
// 	console.log("down",(data.length -result.length)/data.length,"%");
// 	fs.writeFile("test-output/test2.html", result, 'utf8', ()=>{
//
// 	});
// });

// fs.readFile("test-output/product.blade.php", 'utf8', function (err, data) {
// 	console.time("replace");
// 	let result = replaceClasses.uglifyClass(data);
// 	console.timeEnd("replace");
// 	console.log("down",(data.length -result.length)/data.length,"%");
// 	fs.writeFile("test-output/product1.blade.php", result, 'utf8', ()=>{
//
// 	});
// });
function processFile1() {
	fs.readFile("test-output/product.blade.php", 'utf8', function (err, data) {
		console.time("replace");
		let result = replaceClasses.uglifyClass(data);
		console.timeEnd("replace");
		console.log("down", (data.length - result.length) / data.length, "%");
		fs.writeFile("test-output/product1.blade.php", result, 'utf8', () => {

		});
	});
}

function processFile() {
	return new Promise(rev => {
		let files = globule.find("./**/*.blade.php");
		let promises = [];
		console.log("Total", files.length);
		_.each(files, async file => {
			let d = new Promise(resolve => {
				fs.readFile(file, 'utf8', function (err, data) {
					// console.time("replace");
					let result = replaceClasses.replaceHTMLArea(data);
					// console.timeEnd("replace");
					// console.log("down", (data.length - result.length) / data.length, "%");
					resolve();
					fs.writeFile("test-output/test/product1" + (+new Date()) + ".blade.php", result, 'utf8', () => {
					});

				});
			});
			promises.push(d);
			//	console.log(promises.length);
		});
		Promise.all(promises).then(()=> {
			rev();
		});
	});


}

async function main() {
	console.time("replace");
	await processFile();
	console.timeEnd("replace");
}

main();
