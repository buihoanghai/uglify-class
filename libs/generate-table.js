var classTable = {};
var uglifyClasses = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z"
];
var uglifyClasses1 = [
	"a", "b", "c", "d", "e", "f", "g", "h",
	"i", "k", "l", "m", "n", "o", "p", "q",
	"r", "s", "t", "u", "v", "w", "y", "z",
	"0", "1", "2", "3", "4", "5", "6", "7", "8",
	"9", "-", "_"
];
console.log(uglifyClasses.length);
var firstChar = true;
var secondChar = true;
var usedIndex1 = 0;
var usedIndex2 = 0;
var usedIndex3 = 0;
var uglyClass = generateUglyClasses();
function generateUglyClasses() {
	let result = {};
	uglifyClasses.forEach(c1 => {
		result[c1] = {used: false};
		uglifyClasses1.forEach(c2 => {
			result[c1+c2] = {used: false};
		});
	});
	return result;
}

function countClass() {
	let elems = document.querySelectorAll("*");
	let result = 0;
	let classes = 0;
	let classesAll = [];
	console.log("Elements count", elems.length);
	elems.forEach(e => {
//         console.log(e.className);
		if (!isNaN(e.className.length)) {
			result += e.className.length;
			classes += e.className.split(" ").length;
			let cl = e.className.split(" ");
			cl.forEach(c => {
				classesAll.push(c);
				// addRow(c);
			});

		}

	});
	console.log("Total classes", classes);
	console.log("Total length", result);

	let data = [];
	let data1 = {};
	let ps = [];

	classesAll.sort(function (a, b) {
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
//   return b.length - a.length;
		return a.length - b.length;
	});
	for (let i = 0; i < classesAll.length; i++) {
		addRow(classesAll[i]);
	}
	for (let p in classTable) {
		ps.push(p);
	}
	console.log(ps);
	for (let i = 0; i < ps.length; i++) {
		let p = ps[i];
		data.push([p, classTable[p]]);
		data1[p] = classTable[p];
	}
	console.log("classTable.length", data.length);

	console.log(JSON.stringify(data1));

}

function addRow(className) {
	if (className && !isExist(className)) {
		if(className.length<2){
			classTable[className] = className;
			uglyClass[className].used = true;
		}else{
			classTable[className] = getUglifyName();
		}
		// classTable[className] = getCurrentUglifyName(className);
		//       classTable[getCurrentUglifyName(className)]=className;
	}
}
function getUglifyName(){
	let result;
	for(let pp in uglyClass){
		let cl = uglyClass[pp];
		if(!cl.used){
			result = cl;
			cl.used = true;
		}
	}
	return result;
}
function getCurrentUglifyName() {
	if (usedIndex3 === uglifyClasses.length && !secondChar) {
		usedIndex2++;
		usedIndex3 = 0;
	}
	if (usedIndex1 === uglifyClasses.length) {
		if (!firstChar) {
			secondChar = false;
		}
		firstChar = false;
		usedIndex1 = 0;
	}
	if (usedIndex2 === uglifyClasses1.length && !firstChar) {
		usedIndex1++;
		usedIndex2 = 0;
		usedIndex3 = 0;
	}

	if (firstChar) {
		return uglifyClasses[usedIndex1++];
	}
	if (secondChar)
		return uglifyClasses[usedIndex1] + uglifyClasses1[usedIndex2++];
	return uglifyClasses[usedIndex1] + uglifyClasses1[usedIndex2] + uglifyClasses1[usedIndex2++];
	//using all firstChar

}

function isExist(className) {
	return !!classTable[className];
}

const revealed = {
	generateUglyClasses
};
// module.exports = revealed;