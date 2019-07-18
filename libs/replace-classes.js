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
	casesSkip.forEach(c => {
		if (text.indexOf(c) > -1) {
			result = true;
			return false;
		}
	});
	return result;
}

function uglifyClass(text) {
	let regexString = /amp-custom>.*?<\/style>/g;
	let matches;
	let processed;
	let original;
	while ((matches = regexString.exec(text))) {
		let cssArea = original = (matches[0]);
		cssArea = cssArea.replace("amp-custom>", "").replace("</style>", "");
		// console.log("before", cssArea);
		processed = replaceCSSArea(cssArea);
		text = text.replace(original, "amp-custom>" + processed + "</style>");
	}
	text = replaceHTMLArea(text);

	return text;
}

function getUglyClass(className) {
	if (className.indexOf('.') === -1) {
		return;
	}

	let pureClass = className.replace(".", "");
	// console.log("pureClass", pureClass);
	let uglyClass = classesTable[pureClass];
	// console.log("uglyClass", uglyClass);
	if (!uglyClass) {
		//Todo should monitor why the case not exist ugly class
		//console.log("missing ugly class", pureClass);
		return;
	}
	return ["." + pureClass, "." + uglyClass];
}

function getClasses(text) {
	let result = [];
	let temp = "";
	for (let i = 0; i < text.length; i++) {
		let ch = text[i];
		if (/[\s.~>+:)]/.test(ch) && i !== 0) {
			addClass(temp);
			temp = ch;
			continue;
		}
		if (i === text.length - 1) {
			temp += ch;
			addClass(temp);
			break;
		}
		temp += ch;
	}

	function addClass(str) {
		if (str.indexOf(".") > -1) {
			result.push(temp);
		}
	}

	return result;
}


function replaceHTMLArea(text, needToCombine) {
	// let regexString = /(class=\")(.+?)(\")/s;
	let regexString = new RegExp("(class=\")(.+?)(\")", "sg");

	let matches;
	let replaces = [];
	// console.log("start");
	while ((matches = regexString.exec(text))) {
		let original;
		let classesName = original = (matches[0]);
		if (classesName.indexOf("\"\"") > -1) {
			continue;
		}
		classesName = classesName.replace(/\n/g, ' ');
		// console.log("classname",classesName);
		if (isSkipCase(classesName)) {
			continue;
		}
		// console.log("before", classesName);
		let cls = classesName.replace("class=\"", "").replace("\"", "")
		let classes = cls.split(" ");
		let newClasses = [];
		classes.sort();
		let combine = classes.join(" ");
		if(needToCombine && classes.length > 1 ){
			console.log("try", combine, classesTable[combine]);

		}
		if (needToCombine && classes.length > 1 && classesTable[combine]) {
			console.log("finded", combine, classesTable[combine]);
			newClasses.unshift(classesTable[combine]);
		}
		else{
			classes.forEach(cl => {
				if (cl.trim() === "") {
					return true;
				}
				let uglyClass = classesTable[cl];
				if (uglyClass) {
					newClasses.push(uglyClass);
				} else {
					newClasses.push(cl);
					//Todo should monitor why the case not exist ugly class
					//  console.log("not exist ugly class", cl);
				}

			});
		}

		let processedClasses = "class=\"" + newClasses.join(" ") + "\"";
		// });
		// console.log("after", processedClasses);
		replaces.push([original, processedClasses]);
	}
	// console.log("replaces", replaces.length);
	replaces.forEach(place => {
		// console.log(place);
		text = text.replace(place[0], place[1]);
	});

	return text;
}

function replaceCSSArea(text) {
	let classes = getClassesFromText(text);

	classes.forEach(cl => {
		let transform = cl.origin;
		cl.classNames.forEach(className => {
			if (classesTable[className]) {
				let uglyClass = classesTable[className];
				// console.log(className, uglyClass);
				transform = transform.replace(className, uglyClass);
			}
		});
		text = text.replace(cl.origin, transform);

	});
	return text;
}

function getClassesFromText(text) {
	let regexString = /(\.)(.+?)([:>{ ,~+;}()])/sg;
	// let regexString = new RegExp("(\.)(.+?)([:>{ ,~+;}()])", "sg");

	let matches;
	let result = [];
	// console.log("start");
	while ((matches = regexString.exec(text))) {
		// console.log(matches);
		let className = (matches[2]);
		// console.log("classname", className);
		let firstChar = className[0];
		if (isNaN(firstChar) && className.length > 0) {
			let classNames = className.split('.')
			classNames.sort(function (a, b) {
				// ASC  -> a.length - b.length
				// DESC -> b.length - a.length
				return b.length - a.length;
			});
			result.push(
				{
					classNames: classNames,
					origin: matches[0]
				}
			);
		}
		// console.log("before", classesName);
	}
	return result;
}

const revealed = {
	setClassesTable,
	uglifyClass: uglifyClass,
	replaceHTMLArea,
	replaceCSSArea,
	isSkipCase,
	getClasses,
	getClassesFromText
};
module.exports = revealed;
