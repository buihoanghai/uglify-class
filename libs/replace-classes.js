const _ = require('lodash');
const CSSReader = require('./CSSReader');
const cssReader = new CSSReader();
let classesTable = [
	["relative", "a"]
];

function setClassesTable(table) {
	classesTable = table;
}

function isSkipCase(text) {
	//Todo should log somewhere for case converting this case later
	let result = false;
	let casesSkip = ["{{"];
	_.each(casesSkip, c => {
		if (text.indexOf(c) > -1) {
			result = true;
			return false;
		}
	});
	return result;
}

function uglifyClass(text){
	let regexString = /amp-custom>.*?<\/style>/g;
	let matches;
	let processed;
	let original;
	while ((matches = regexString.exec(text))) {
		let cssArea = original = (matches[0]);
		cssArea = cssArea.replace("amp-custom>","").replace("</style>","")
		// console.log("before", cssArea);
		processed = replaceCSSArea(cssArea);
		text = text.replace(original, "amp-custom>" + processed +"</style>");
	}
	text = replaceHTMLArea(text);

	return text;
}

function replaceCSSArea(text) {
	let cssNodes = cssReader.parse(text);
	let replaces = [];
	_.each(cssNodes, node => {
		let className = node.query;
		if (className.indexOf('.') === -1) {
			return;
		}
		let pureClass = className.replace(/[\.{]/g, "");
		// console.log("pureClass", pureClass);
		let uglyClass = classesTable[pureClass];
		// console.log("uglyClass", uglyClass);
		if (uglyClass) {
			replaces.push(["." + pureClass, "." + uglyClass]);
			//Todo should monitor why the case not exist ugly class
		}
	});
	_.each(replaces, place => {
		text = text.replace(place[0], place[1]);
	});

	return text;
}

function replaceCSSArea1(text) {
	let regexString = /\..*?[{]/g;
	// let regexString = new RegExp("\..*?[,~:{ \.]", "gi");
	let matches;
	let replaces = [];
	while ((matches = regexString.exec(text))) {
		let original;
		let className = original = (matches[0]);
		// console.log("before", className);
		if (className.indexOf('.') === -1) {
			continue;
		}
		if (className.indexOf("}") > -1) {
			className = className.split("}")[1];
		}
		let pureClass = className.replace(/[\.{]/g, "");
		// console.log("pureClass", pureClass);
		let uglyClass = classesTable[pureClass];
		// console.log("uglyClass", uglyClass);
		if (uglyClass) {
			replaces.push(["." + pureClass, "." + uglyClass]);
			//Todo should monitor why the case not exist ugly class
		}
	}
	_.each(replaces, place => {
		text = text.replace(place[0], place[1]);
	});

	return text;
}

function replaceHTMLArea(text) {
	let regexString = new RegExp("class=\".*?\"", "gi");
	let matches;
	let replaces = [];
	while ((matches = regexString.exec(text))) {
		let original;
		let classesName = original = (matches[0]);
		if (isSkipCase(classesName)) {
			continue;
		}
		// console.log("before", classesName);
		let classes = classesName.replace("class=\"", "").replace("\"", "").split(" ");
		let newClasses = [];
		_.each(classes, cl => {
			let uglyClass = classesTable[cl];
			if (uglyClass) {
				newClasses.push(uglyClass);
			} else {
				newClasses.push(cl);
			}

		});
		//
		// _.each(classesTable, row => {
		// 	classesName = classesName.replace(row[0], row[1]);
		//
		let processedClasses = "class=\"" + newClasses.join(" ") + "\"";
		// });
		// console.log("after", processedClasses);
		replaces.push([original, processedClasses]);
	}
	// console.log("replaces", replaces.length);
	_.each(replaces, place => {
		// console.log(place);
		text = text.replace(place[0], place[1]);
	});

	return text;
}

function replaceText1(text) {
	_.each(classesTable, row => {
		text = text.replace(new RegExp(row[0], "g"), row[1]);
		// if(orginal !== text){
		// 	console.log(row);
		// 	orginal = text;
		// }
	});

	return text;
}

const revealed = {
	setClassesTable,
	uglifyClass: uglifyClass,
	replaceHTMLArea,
	replaceCSSArea,
	isSkipCase
};
module.exports = revealed;