const replaceClasses = require("./libs/replace-classes");
const tableData = require("./libs/class-table").data;
const fs = require("fs");
replaceClasses.setClassesTable(tableData);

fs.readFile("test-output/test.html", 'utf8', function (err, data) {
	console.time("replace");
	let result = replaceClasses.replaceText(data);
	console.timeEnd("replace");
	console.log("down",(data.length -result.length)/data.length,"%");
	fs.writeFile("test-output/test2.html", result, 'utf8', ()=>{

	});
});