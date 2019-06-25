const replaceClasses = require("./libs/replace-classes");
const generateTable = require("./libs/generate-table");

var revealed = {
	uglifyClass: replaceClasses.uglifyClass,
	setClassesTable: replaceClasses.setClassesTable,
	replaceHTMLArea: replaceClasses.replaceHTMLArea,
	replaceCSSArea: replaceClasses.replaceCSSArea,
	createClassesDictionaryFromUrl : generateTable.generateUglyClasses
};

module.exports = revealed;