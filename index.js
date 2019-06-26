const replaceClasses = require("./libs/replace-classes");
const generateTable = require("./libs/generate-table");

var revealed = {
	uglifyClass: replaceClasses.uglifyClass,
	setClassesTable: replaceClasses.setClassesTable,
	replaceHTMLArea: replaceClasses.replaceHTMLArea,
	replaceCSS: replaceClasses.replaceCSSArea,
	createClassesDictionaryFromUrl : generateTable.createClassesDictionaryFromUrls
};

module.exports = revealed;