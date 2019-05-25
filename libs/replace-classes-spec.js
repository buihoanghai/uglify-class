const replaceClasses = require("./replace-classes");
const fs = require("fs");
const tableData1 = require("./class-table1.json");

describe("replace-classes", () => {
	describe("replaceHTMLArea", () => {
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
		// 	let outputText = replaceClasses.replaceHTMLArea(inputText);
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
		// 	let outputText = replaceClasses.replaceHTMLArea(inputText);
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
		// 	let outputText = replaceClasses.replaceHTMLArea(inputText);
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
		// 	let outputText = replaceClasses.replaceHTMLArea(inputText);
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
		// 		let outputText = replaceClasses.replaceHTMLArea(inputText);
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
			let outputText = replaceClasses.replaceHTMLArea(inputText);
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
	describe("replaceCSSArea", () => {

		// it("should return correct data", () => {
		// 	replaceClasses.setClassesTable(
		// 		tableData1
		// 	);
		// 	let inputText = `.overflow-x-auto{overflow-x:auto}`;
		// 	let expected = `.m-{overflow-x:auto}`;
		// 	let output = replaceClasses.replaceCSSArea(inputText);
		//
		// 	expect(expected).toEqual(output);
		// });

		it("should return correct data2", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.overflow-x-auto{overflow-x:auto}.overflow-y-scroll{overflow-y:scroll}.o-100{opacity:1}.o-40{opacity:.4}.rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.pl2{padding-left:.5rem}`;
			let expected = `.m-{overflow-x:auto}.h4{overflow-y:scroll}.o-100{opacity:1}.gw{opacity:.4}.mo{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mh{padding-left:.5rem}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
	});
	describe("uglifyClass", () => {

		it("should return correct data1", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `<style amp-custom>.icon{display:inline-block;vertical-align:middle;margin-top:-2px}</style>`;
			let expected = `<style amp-custom>.au{display:inline-block;vertical-align:middle;margin-top:-2px}</style>`;
			let output = replaceClasses.uglifyClass(inputText);

			expect(expected).toEqual(output);
		});
	});
});