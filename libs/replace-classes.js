const _ = require('lodash');

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

function replaceText(text) {
	let orginal = text;
	let reget = new RegExp("class=\".*?\"", "gi");
	let matches;
	let replaces = [];
	while ((matches = reget.exec(text))) {
		let classesName = orginal = (matches[0]);
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
		let processedClasses = "class=\"" + newClasses.join(" ") +"\"";
		// });
		// console.log("after", processedClasses);
		replaces.push([orginal, processedClasses]);
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