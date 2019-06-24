const generateTable = require("./generate-table");
const fs = require("fs");

describe("generateTable", () => {
	describe("generateUglyClasses", () => {

		it("should return correct data2", () => {
			let output = generateTable.generateUglyClasses();
			// console.log(output);
			expect(null).not.toEqual(output);
		});
	});
});