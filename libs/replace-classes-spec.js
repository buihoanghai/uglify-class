const replaceClasses = require("./replace-classes");
const fs = require("fs");
const tableData1 = require("../example/class-table1.json");
const tableData2 = require("../example/dictionaries/plp.json");

describe("replace-classes", () => {
	describe("replaceHTMLArea", () => {
		it("should return correct data", () => {
			replaceClasses.setClassesTable(
				{"relative": "a"}
			);
			let inputText = `<div class="relative"></div>`;
			let expected = `<div class="a"></div>`;
			console.time("replace");
			let outputText = replaceClasses.replaceHTMLArea(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});
		it("should return correct data1", () => {
			replaceClasses.setClassesTable(
				{
					"relative": "a",
					"absolute": "b"
				}
			);
			let inputText = `<div class="relative absolute"></div>`;
			let expected = `<div class="a b"></div>`;
			console.time("replace");
			let outputText = replaceClasses.replaceHTMLArea(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});
		it("should return correct data2", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `<div class="relative absolute"></div>`;
			let expected = `<div class="cd n"></div>`;
			console.time("replace");
			let outputText = replaceClasses.replaceHTMLArea(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});
		it("should return correct data3", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `<span class="name blue"> <b class="blue">Logitech</b> M170 </span>`;
			let expected = `<span class="n8 as"> <b class="as">Logitech</b> M170 </span>`;
			console.time("replace");
			let outputText = replaceClasses.replaceHTMLArea(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});
		it("should return correct data4", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			fs.readFile("example/product.blade.php", 'utf8', (err, data) => {
				let inputText = data;
				let expected = 2110;
				console.time("replace");
				let outputText = replaceClasses.replaceHTMLArea(inputText);
				// console.log(outputText);
				console.timeEnd("replace");

				expect(expected).toEqual(outputText.length);
			});
		});
		it("should return correct data5", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `<span class="h73 mv2 ml13-l mr13-l w-60 wc26r-l"><span class="name blue lh-title overflow-hidden h33"><span class="name blue lh-title overflow-hidden h33"><b class="blue">{{{ $product['_source']['brand']['name'] }}}</b>`;
			let expected = `<span class="n6 ll n2 n3 n7 n4"><span class="n8 as n9 az n-"><span class="n8 as n9 az n-"><b class="as">{{{ $product['_source']['brand']['name'] }}}</b>`;
			console.time("replace");
			let outputText = replaceClasses.replaceHTMLArea(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});

	});
	describe("isSkipCase", () => {
		it("should skip", () => {
			let inputText = ` <span class="{{ $product['_source']['price']['discount'] > 0 ? 'f11 lh-11 original strike b dib' : 'accent b f16' }}">`;
			let expected = true;
			let output = replaceClasses.isSkipCase(inputText);

			expect(expected).toEqual(output);
		});
		it("should not skip", () => {
			let inputText = `<span class="f11 lh-11 original strike b dib">`;
			let expected = false;
			let output = replaceClasses.isSkipCase(inputText);

			expect(expected).toEqual(output);
		});
	});
	describe("replaceCSSArea", () => {

		it("should return correct data", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.overflow-x-auto{overflow-x:auto}`;
			let expected = `.m-{overflow-x:auto}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});

		it("should return correct data2", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.overflow-x-auto{overflow-x:auto}.overflow-y-scroll{overflow-y:scroll}.o-100{opacity:1}.o-40{opacity:.4}.rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.pl2{padding-left:.5rem}`;
			let expected = `.m-{overflow-x:auto}.h4{overflow-y:scroll}.o-100{opacity:1}.gw{opacity:.4}.mo{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mh{padding-left:.5rem}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data3", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.overflow-x-auto .overflow-y-scroll{overflow-x:auto}.overflow-x-auto~.overflow-y-scroll{overflow-x:auto}`;
			let expected = `.m- .h4{overflow-x:auto}.m-~.h4{overflow-x:auto}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data4", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.overflow-x-auto+.overflow-y-scroll{overflow-x:auto}`;
			let expected = `.m-+.h4{overflow-x:auto}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data4", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `#sidebar{height:100vh;width:300px}#sidebar .more{background-color:transparent}#links ul{margin-bottom:.2rem}#links li{line-height:1.5rem;margin:10px 0}#links i{padding-left:2.5rem}.bg-gray-light{background-color:#f2f2f2}.bg-turquoise{background-color:#3cc}.white{color:#fff}`;
			let expected = `#sidebar{height:100vh;width:300px}#sidebar .bg{background-color:transparent}#links ul{margin-bottom:.2rem}#links li{line-height:1.5rem;margin:10px 0}#links i{padding-left:2.5rem}.ov{background-color:#f2f2f2}.gn{background-color:#3cc}.cl{color:#fff}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data5", () => {
			replaceClasses.setClassesTable(
				tableData1
			);
			let inputText = `.bg-turquoise.white{color:#fff}`;
			let expected = `.gn.cl{color:#fff}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data6", () => {
			replaceClasses.setClassesTable(
				{
					"icon": "a",
					"icon-a": "b"
				}
			);
			let inputText = `.icon.icon-a{color:#fff}`;
			let expected = `.a.b{color:#fff}`;
			let output = replaceClasses.replaceCSSArea(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data7", () => {
			replaceClasses.setClassesTable(
				tableData2
			);
			fs.readFile("example/iprice-home-min.css", 'utf8', (err, data) => {
				console.log(data.length);
				let expected = `.m-{overflow-x:auto}`;
				console.time("Start");
				let output = replaceClasses.replaceCSSArea(data);
				console.timeEnd("Start");
				expect(expected).toEqual(output);
			});


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
	describe("getClasses", () => {

		it("should return correct data1", () => {
			let inputText = `.bg-turquoise.white`;
			let expected = [".bg-turquoise", ".white"];
			let output = replaceClasses.getClasses(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data2", () => {
			let inputText = `bg-turquoise.white`;
			let expected = [".white"];
			let output = replaceClasses.getClasses(inputText);

			expect(expected).toEqual(output);
		});
		it("should return correct data2", () => {
			let inputText = `tbody tr:not(.title)`;
			let expected = [".title"];
			let output = replaceClasses.getClasses(inputText);

			expect(expected).toEqual(output);
		});
	});
});