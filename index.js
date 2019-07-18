const replaceClasses = require("./libs/replace-classes");
const generateTable = require("./libs/generate-table");
const gulpPipe = require("./libs/gulp-pipe");

var revealed = {
	uglifyClass: replaceClasses.uglifyClass,
	setClassesTable: replaceClasses.setClassesTable,
	replaceHTMLArea: replaceClasses.replaceHTMLArea,
	replaceCSS: replaceClasses.replaceCSSArea,
	createClassesDictionaryFromUrl : generateTable.createClassesDictionaryFromUrls,
	gulpPipeCSS: gulpPipe.transformCSS,
    getLongClassesFromUrl : generateTable.getLongClassesFromUrl
};

module.exports = revealed;