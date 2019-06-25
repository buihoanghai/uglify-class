const select = require('xpath.js');
const request = require("./request");
const DOMParser = require('xmldom').DOMParser;


var classTable = {};
const firstChar = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z",
	"-", "_"
];
const secondChar = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8",
	"9", "-", "_"
];
console.log(firstChar.length);
var uglyClasses = generateUglyClasses();

function generateUglyClasses() {
	let result = {};
	firstChar.forEach(c1 => {
		result[c1] = {used: false};
		secondChar.forEach(c2 => {
			result[c1 + c2] = {used: false};
		});
	});
	return result;
}


function addRow(className) {
	if (className && !isExist(className)) {
		if (className.length < 3) {
			classTable[className] = className;
			uglyClasses[className].used = true;
		} else {
			classTable[className] = getUglifyName();
		}
	}
}

function getUglifyName() {
	let result;
	for (let pp in uglyClasses) {
		let cl = uglyClasses[pp];
		if (!cl.used) {
			result = pp;
			cl.used = true;
			break;
		}
	}
	return result;
}

function isExist(className) {
	return !!classTable[className];
}
function getClassesFromUrl(url){
	const content = request.getResponse(url);
	let doc = new DOMParser().parseFromString(content);
	let result = [];
	let elems = select(doc, "//*/@class");
	console.log("Count", elems.length);
	let totalClassesLength = 0;
	let classesCount = 0;
	elems.forEach(e => {
		let className = e.value;
		if (!isNaN(className.length)) {
			totalClassesLength += className.length;
			classesCount += className.split(" ").length;
			let cl = className.split(" ");
			cl.forEach(c => {
				if(!/[{}]/.exec(c)){
					result.push(c);
				}
			});
		}
	});
	return result;
}
function buildClassesDictionary(classes){
	let result = [];
	let ps = [];

	classes.sort(function (a, b) {
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
//   return b.length - a.length;
		return a.length - b.length;
	});
	for (let i = 0; i < classes.length; i++) {
		addRow(classes[i]);
	}
	for (let p in classTable) {
		ps.push(p);
	}
	console.log("created table", ps.length);
	for (let i = 0; i < ps.length; i++) {
		let p = ps[i];
		result[p] = classTable[p];
	}
	return result;
}
function createClassesDictionaryFromUrls(urls) {
	let classesAll = [];
	urls.forEach(url=>{
		classesAll = classesAll.concat(getClassesFromUrl(url));
	});
	console.log(classesAll.length);
	let result = buildClassesDictionary(classesAll);
	return result;
}

const revealed = {
	getUglifyName,
	generateUglyClasses,
	createClassesDictionaryFromUrls
};
module.exports = revealed;