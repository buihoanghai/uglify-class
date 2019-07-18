const uglifyClass = require("../index");
const fs = require("fs");

function main() {
	let pageTypes = [
		{
			urls: [
				// plp
				"https://dev-iprice-my.iprice.mx/apple/",
				"https://dev-iprice-my.iprice.mx/bear/appliances/?show-filter=1",
				"https://dev-iprice-my.iprice.mx/shoes/",
				// pdp
				"https://dev-iprice-my.iprice.mx/compare/apple-iphone-7/",
				"https://dev-iprice-my.iprice.mx/compare/apple-iphone-7-32gb-gold/",
				"https://iprice.co.id/harga/asus-zenfone-6-32gb-hitam/",
				// trends
				"https://dev-iprice-my.iprice.mx/trends/",
				"https://dev-iprice-my.iprice.mx/trends/technology/",
				"https://dev-iprice-my.iprice.mx/trends/technology/10-tech-deals-for-hari-raya-2019-at-shopee-malaysia/",
				//coupons
				"https://dev-iprice-my.iprice.mx/coupons/",
				"https://dev-iprice-my.iprice.mx/coupons/stores/",
				"https://dev-iprice-my.iprice.mx/coupons/e-wallet/",
				"https://dev-iprice-my.iprice.mx/coupons/foodpanda/",
				"https://dev-iprice-my.iprice.mx/coupons/foodpanda/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F",
				//homepage
				"https://dev-iprice-my.iprice.mx/",
				//404
				"https://dev-iprice-my.iprice.mx/casdazx/",
				//redirect
				"https://dev-iprice-my.iprice.mx/r/c/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F"

			],
			output: "uglify-class-dictionary.json"
		 }
		// ,{
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/apple/",
		// 		"https://dev-iprice-my.iprice.mx/bear/appliances/?show-filter=1",
		// 		"https://dev-iprice-my.iprice.mx/shoes/",
		// 	],
		// 	output: "plp.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/compare/apple-iphone-7/",
		// 		"https://dev-iprice-my.iprice.mx/compare/apple-iphone-7-32gb-gold/",
		// 		"https://iprice.co.id/harga/asus-zenfone-6-32gb-hitam/"
		// 	],
		// 	output: "pdp.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/trends/",
		// 		"https://dev-iprice-my.iprice.mx/trends/technology/10-tech-deals-for-hari-raya-2019-at-shopee-malaysia/"
		// 	],
		// 	output: "trends.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/coupons/foodpanda/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F",
		// 		"https://dev-iprice-my.iprice.mx/coupons/",
		// 		"https://dev-iprice-my.iprice.mx/coupons/stores/",
		// 		"https://dev-iprice-my.iprice.mx/coupons/e-wallet/",
		// 		"https://dev-iprice-my.iprice.mx/coupons/foodpanda/",
		// 	],
		// 	output: "coupons.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/"
		// 	],
		// 	output: "homepage.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/casdazx/"
		// 	],
		// 	output: "page404.json"
		// },
		// {
		// 	urls: [
		// 		"https://dev-iprice-my.iprice.mx/r/c/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F"
		// 	],
		// 	output: "redirect.json"
		// }
	];
	pageTypes.forEach(page => {
		buildClassDictionary(page.urls, page.output);
	});

}

function buildClassDictionary(input, fileName) {

	let output = uglifyClass.createClassesDictionaryFromUrl(input);
	let filePath = "./example/dictionaries/" + fileName;
	console.log(filePath);
	fs.writeFile(filePath, JSON.stringify(output), 'utf8', (err) => {
		if (err) {
			console.log('Some error occured - file either not saved or corrupted file saved.', err);
		} else {
			console.log(filePath, 'It\'s saved!');
		}
	});
}

main();