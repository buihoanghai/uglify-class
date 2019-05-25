const _ = require('lodash');

let classesTable = [
	["relative", "a"]
];

function setClassesTable(table) {
	classesTable = table;
}

function replaceText(text) {
	let orginal = text;
	let reget = new RegExp("class=\".*?\"", "gm");
	let matches;
	while ((matches = reget.exec(text))) {
		let classesName = orginal = (matches[0]);
		 // console.log("before",classesName);
		_.each(classesTable, row => {
			classesName = classesName.replace(new RegExp(row[0], "g"), row[1]);
			// if(orginal !== text){
			// 	console.log(row);
			// 	orginal = text;
			// }
		});
		 // console.log("after",classesName);
		text = text.replace(orginal,classesName);
	}

	return text;
}
function replaceText2(text) {
	let orginal = text;
	let reget = new RegExp("class=\".*\"", "gm");
	let matches;
	while ((matches = reget.exec(text))) {
		let classesName = orginal = (matches[0]);
		// console.log("before",classesName);
		_.each(classesTable, row => {
			classesName = classesName.replace(new RegExp(row[0], "g"), row[1]);
			// if(orginal !== text){
			// 	console.log(row);
			// 	orginal = text;
			// }
		});
		// console.log("after",classesName);
		text = text.replace(orginal,classesName);
	}

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
	replaceText
};
module.exports = revealed;