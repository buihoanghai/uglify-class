const generateTable = require("./generate-table");
const fs = require("fs");

describe("generateTable", () => {
	describe("generateUglyClasses", () => {

		it("should return correct data2", () => {
			let output = generateTable.generateUglyClasses();
			expect(undefined).not.toEqual(output);
		});
	});
	describe("createClassesDictionaryFromUrls", () => {

		fit("should return correct data2", () => {
			let input = [
				"https://iprice.my/apple/",
				"https://iprice.my/shoes/",
				"https://iprice.my/compare/apple-iphone-7/",
				"https://iprice.my/trends/",
				"https://iprice.my/coupons/",
				"https://iprice.my/coupons/foodpanda/",
				"https://iprice.my/"
			];
			let output = generateTable.createClassesDictionaryFromUrls(input);
			expect(undefined).not.toEqual(output);
		});
	});
	describe("getUglifyName", () => {

		it("should return correct data2", () => {
			let output = generateTable.getUglifyName();
			// console.log(output);
			expect("a").toEqual(output);
		});
	});
});