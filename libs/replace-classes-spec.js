const replaceClasses = require("./replace-classes");
const fs = require("fs");
const tableData1 = require("./class-table1.json");

describe("replace-classes", () => {
	describe("replaceText", () => {
		// it("should return correct data", () => {
		// 	replaceClasses.setClassesTable(
		// 		[
		// 			["relative", "a"]
		//
		// 		]
		// 	);
		// 	let inputText = `<div class="relative"></div>`;
		// 	let expected = `<div class="a"></div>`;
		// 	console.time("replace");
		// 	let outputText = replaceClasses.replaceText(inputText);
		// 	console.timeEnd("replace");
		//
		// 	expect(expected).toEqual(outputText);
		// });
		// it("should return correct data1", () => {
		// 	replaceClasses.setClassesTable(
		// 		[
		// 			["relative", "a"],
		// 			["absolute", "b"]
		//
		// 		]
		// 	);
		// 	let inputText = `<div class="relative absolute"></div>`;
		// 	let expected = `<div class="a b"></div>`;
		// 	console.time("replace");
		// 	let outputText = replaceClasses.replaceText(inputText);
		// 	console.timeEnd("replace");
		//
		// 	expect(expected).toEqual(outputText);
		// });
		// it("should return correct data2", () => {
		// 	replaceClasses.setClassesTable(
		// 		tableData1
		// 	);
		// 	let inputText = `<div class="relative absolute"></div>`;
		// 	let expected = `<div class="cd n"></div>`;
		// 	console.time("replace");
		// 	let outputText = replaceClasses.replaceText(inputText);
		// 	console.timeEnd("replace");
		//
		// 	expect(expected).toEqual(outputText);
		// });
		// it("should return correct data3", () => {
		// 	replaceClasses.setClassesTable(
		// 		tableData1
		// 	);
		// 	let inputText = `<span class="name blue"> <b class="blue">Logitech</b> M170 </span>`;
		// 	let expected = `<span class="n9 at"> <b class="at">Logitech</b> M170 </span>`;
		// 	console.time("replace");
		// 	let outputText = replaceClasses.replaceText(inputText);
		// 	console.timeEnd("replace");
		//
		// 	expect(expected).toEqual(outputText);
		// });
		// it("should return correct data4", () => {
		// 	replaceClasses.setClassesTable(
		// 		tableData1
		// 	);
		// 	fs.readFile("test-output/product.blade.php", 'utf8', (err, data) => {
		// 		let inputText = data;
		// 		let expected = 2088.;
		// 		console.time("replace");
		// 		let outputText = replaceClasses.replaceText(inputText);
		// 		console.log(outputText);
		// 		console.timeEnd("replace");
		//
		// 		expect(expected).toEqual(outputText.length);
		// 	});
		// });
		it("should return correct data5", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `<span class="h73 mv2 ml13-l mr13-l w-60 wc26r-l">
        <span class="name blue lh-title overflow-hidden h33">
        <span class="name blue lh-title overflow-hidden h33">
 <b class="blue">{{{ $product['_source']['brand']['name'] }}}</b>`;
			let expected = `<div class="cd n"></div>`;
			console.time("replace");
			let outputText = replaceClasses.replaceText(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});

	});
	describe("isSkipCase", () => {
		// it("should skip", () => {
		// 	let inputText = ` <span class="{{ $product['_source']['price']['discount'] > 0 ? 'f11 lh-11 original strike b dib' : 'accent b f16' }}">`;
		// 	let expected = true;
		// 	let output = replaceClasses.isSkipCase(inputText);
		//
		// 	expect(expected).toEqual(output);
		// });
		it("should not skip", () => {
			let inputText = `<span class="f11 lh-11 original strike b dib">`;
			let expected = false;
			let output = replaceClasses.isSkipCase(inputText);

			expect(expected).toEqual(output);
		});
	});
});