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
	if (className && !isExist(className)) {
		if (className.length < 3) {
			classTable[className] = className;
			console.log(className);
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
	let result = [];
	let elems = select(doc, "//*/@class");
	console.log("Count", elems.length);
	let totalClassesLength = 0;
	let classesCount = 0;
	elems.forEach(e => {
		let className = e.value;
		if (!isNaN(className.length)) {
			// console.log(className);
			totalClassesLength += className.length;
			classesCount += className.split(" ").length;
			let cl = className.split(" ");
			cl.forEach(c => {
				if (!/[{}]/.exec(c)) {
					result.push(c);
				}
			});
		}
	});
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
        classesAll = classesAll.concat(getClassesFromUrl(url));
    });
	let result = buildClassesDictionary(classesAll);
	return result;
}

function getLongClassesFromUrl(url) {
    const content = request.getResponse(url);
    let doc = new DOMParser().parseFromString(content);
    let longClasses = [];
    let elems = select(doc, "//*/@class");
    elems.forEach(e => {
        let className = e.value;
        if (className.split(" ").length > 1) {
            className = className.split(" ");
            className = className.sort();
            className = className.join(" ");
        } else {
        	// console.log(className);
		}
		if (!className.includes('{{') && !className.includes('}}')) {

            longClasses.push(className);
        }
    });
    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    const uniqueLongClasses = longClasses.filter(unique);
    let result = buildClassesDictionary(uniqueLongClasses);
    console.log(result);

    return result;
}

const revealed = {
	getUglifyName,
	generateUglyClasses,
	createClassesDictionaryFromUrls,
    getLongClassesFromUrl
};
module.exports = revealed;