const generateTable = require("./generate-table");
const fs = require("fs");

describe("generateTable", () => {
	describe("generateUglyClasses", () => {

		it("should return correct data2", () => {
			let output = generateTable.generateUglyClasses();
			expect(undefined).not.toEqual(output);
		});
	});
	describe("filterCombineClass", () => {

		it("should return correct data1", () => {
			let output = generateTable.filterCombineClass({},"truncate db f16");
			expect(output).toEqual({"db f16 truncate":""});
		});
		it("should return correct data1", () => {

			let combineClass = generateTable.filterCombineClass({},"truncate db f16");
			combineClass = generateTable.filterCombineClass(combineClass,"truncate db f16");
			expect(combineClass).toEqual({"db f16 truncate":""});
		});
	});
	describe("getClassesFromUrl", () => {

		fit("should return correct data2", () => {
			let output = generateTable.getClassesFromUrl("https://dev-iprice-my.iprice.mx/apple/");
			console.log(output.combineClasses);
			expect(undefined).not.toEqual(output);
		});
	});
	describe("createClassesDictionaryFromUrls", () => {

		it("should return correct data2", () => {
			let input = [
				"https://dev-iprice-my.iprice.mx/apple/",
				// "https://iprice.my/shoes/",
				// "https://iprice.my/compare/apple-iphone-7/",
				// "https://iprice.my/trends/",
				// "https://iprice.my/coupons/",
				// "https://iprice.my/coupons/foodpanda/",
				// "https://iprice.my/"
			];
			let output = generateTable.createClassesDictionaryFromUrls(input);
			console.log("test", JSON.stringify(output));
			expect(undefined).not.toEqual(output);
		});
	});
	describe("getUglifyName", () => {

		it("should return correct data2", () => {
			let output = generateTable.getUglifyName();
			// console.log(output);
			expect("A").toEqual(output);
		});
	});
});