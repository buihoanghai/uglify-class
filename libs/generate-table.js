const select = require('xpath.js');
const request = require("./request");
const DOMParser = require('xmldom').DOMParser;


var classTable = {};
const firstChar = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H",
	"I", "K", "L", "M", "N", "O", "P", "Q",
	"R", "S", "T", "U", "V", "W", "Y", "Z",
	"-", "_"
];
const secondChar = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H",
	"I", "K", "L", "M", "N", "O", "P", "Q",
	"R", "S", "T", "U", "V", "W", "Y", "Z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8",
	"9", "-", "_"
];
console.log(firstChar.length);
let uglifyArr = [];
var uglyClasses = generateUglyClasses();

function generateUglyClasses2Char() {
	let result = {};
	uglifyArr = [];
	firstChar.forEach(c1 => {
		if (c1 !== "-") {
			uglifyArr.push(c1);
		}
		result[c1] = {used: false};
		secondChar.forEach(c2 => {
			uglifyArr.push(c1 + c2);
			result[c1 + c2] = {used: false};
		});
	});
	uglifyArr.sort(function (a, b) {
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
//   return b.length - a.length;
		return a.length - b.length;
	});
	return result;
}

function generateUglyClasses() {
	//using 3 chars
	let result = {};
	uglifyArr = [];
	firstChar.forEach(c1 => {
		if (c1 !== "-") {
			uglifyArr.push(c1);
			result[c1] = {used: false};
		}
		secondChar.forEach(c2 => {
			if (!(c1 === "-" && !isNaN(c2))) {
				uglifyArr.push(c1 + c2);
				result[c1 + c2] = {used: false};
			}else{
				// console.log("aaaaaaaaaaaaaaa", c1, c2);
			}
			secondChar.forEach(c3 => {
				if (!(c1 === "-" && !isNaN(c2) && !isNaN(c3))) {
					uglifyArr.push(c1 + c2 + c3);
					result[c1 + c2 + c3] = {used: false};
				}
			});
		});
	});
	uglifyArr.sort(function (a, b) {
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
//   return b.length - a.length;
		return a.length - b.length;
	});
	return result;
}


function addRow(className) {
	if (isNaN(className) && className && !isExist(className)) {
		if (className.length < 3 && uglyClasses[className]) {
			classTable[className] = className;
			 console.log("class",className);
			uglyClasses[className].used = true;
		} else {
			classTable[className] = getUglifyName();
		}
	}
}

function getUglifyName() {
	let result;
	for (let i = 0; i < uglifyArr.length; i++) {
		let pp = uglifyArr[i];
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

function getClassesFromUrl(url) {
	const content = request.getResponse(url);
	let doc = new DOMParser().parseFromString(content);
	let result = {
		classes : [],
		combineClasses: []
	};
	let elems = select(doc, "//*/@class");
	console.log("Count", elems.length);
	let totalClassesLength = 0;
	let classesCount = 0;
	elems.forEach(e => {
		let className = e.value;
		if (!isNaN(className.length)) {
			// console.log(className);
			if(className.split(" ").length > 2){
				result.combineClasses = filterCombineClass(result.combineClasses, className);
			}
			totalClassesLength += className.length;
			classesCount += className.split(" ").length;
			let cl = className.split(" ");
			cl.forEach(c => {
				if (!/[{}]/.exec(c)) {
					result.classes.push(c);
				}
			});
		}
	});
	return result;
}

function filterCombineClass(combineClasses, str) {
	var formatStr = str.split(" ").sort().join(" ");
	let result = combineClasses;
	if (!formatStr.includes("{")) {
		result[formatStr] = "";
	}
	return result;
}
function buildClassesDictionary(classes) {
	let result = {};
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

function resetData() {
	uglyClasses = generateUglyClasses();
	classTable = {};
}

function createClassesDictionaryFromUrls(urls) {
	resetData();
	let classesAll = [];
	urls.forEach(url => {
		let data = getClassesFromUrl(url);
		let combineClasses = data.combineClasses;
		classesAll = classesAll.concat(data.classes);
		for(let pp in combineClasses){
			classesAll.push(pp);
		}
	});
	console.log(classesAll.length);
	let result = buildClassesDictionary(classesAll);
	return result;
}


const revealed = {
	getUglifyName,
	getClassesFromUrl,
	generateUglyClasses,
	filterCombineClass,
	createClassesDictionaryFromUrls
};
module.exports = revealed;