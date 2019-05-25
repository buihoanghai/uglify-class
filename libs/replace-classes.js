const _ = require('lodash');

let classesTable = [
	["relative", "a"]
];

function setClassesTable(table) {
	classesTable = table;
}

function isSkipCase(text) {
	//Todo should log somewhere for case to convert this case later
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

function replaceText(text) {
	let orginal = text;
	let reget = new RegExp("class=\".*?\"", "gi");
	let matches;
	let replaces = [];
	while ((matches = reget.exec(text))) {
		let classesName = orginal = (matches[0]);
		if(isSkipCase(classesName)){
			continue;
		}
		// console.log("before", classesName);
		_.each(classesTable, row => {
			classesName = classesName.replace(row[0], row[1]);
			// if(orginal !== text){
			// 	console.log(row);
			// 	orginal = text;
			// }
		});
		// console.log("after", classesName);
		replaces.push([orginal, classesName]);
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
	replaceText,
	isSkipCase
};
module.exports = revealed;