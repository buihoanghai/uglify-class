const replaceClasses = require("./libs/replace-classes");
const tableData1 = require("./libs/class-table2");
const dir = require("./libs/dir");
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
function processFile1(){
	fs.readFile("test-output/product.blade.php", 'utf8', function (err, data) {
	console.time("replace");
	let result = replaceClasses.uglifyClass(data);
	console.timeEnd("replace");
	console.log("down",(data.length -result.length)/data.length,"%");
	fs.writeFile("test-output/product1.blade.php", result, 'utf8', ()=>{

	});
});
}
function processFile() {
	let files = globule.find("/home/haibui/projects/iprice/web/frontend/resources/views/**/*.blade.php");

	_.each(files, async file => {
		fs.readFile(file, 'utf8', function (err, data) {
			console.time("replace");
			let result = replaceClasses.uglifyClass(data);
			console.timeEnd("replace");
			console.log("down", (data.length - result.length) / data.length, "%");
			fs.writeFile("test-output/test/product1"+ (+new Date())+".blade.php", result, 'utf8', () => {

			});

		});
	});

}

processFile1();