const replaceClasses = require("./libs/replace-classes");

var revealed = {
	uglifyClass: replaceClasses.uglifyClass,
	setClassesTable: replaceClasses.setClassesTable,
	replaceHTMLArea: replaceClasses.replaceHTMLArea,
	replaceCSSArea: replaceClasses.replaceCSSArea
};

module.exports = revealed;