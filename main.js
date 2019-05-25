const replaceClasses = require("./libs/replace-classes");
const tableData1 = require("./libs/class-table1");
const fs = require("fs");
replaceClasses.setClassesTable(tableData1);

fs.readFile("test-output/test.html", 'utf8', function (err, data) {
	console.time("replace");
	let result = replaceClasses.uglifyClass(data);
	console.timeEnd("replace");
	console.log("down",(data.length -result.length)/data.length,"%");
	fs.writeFile("test-output/test2.html", result, 'utf8', ()=>{

	});
});