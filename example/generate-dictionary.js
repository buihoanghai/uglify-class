const uglifyClass = require("../index");
const fs = require("fs");

function main() {
	let pageTypes = [
		{
			urls: [
				// plp
				"https://iprice.my/apple/",
				"https://iprice.my/bear/appliances/?show-filter=1",
				"https://iprice.my/shoes/",
				// pdp
				"https://iprice.my/compare/apple-iphone-7/",
				"https://iprice.my/compare/apple-iphone-7-32gb-gold/",
				"https://iprice.co.id/harga/asus-zenfone-6-32gb-hitam/",
				// trends
				"https://iprice.my/trends/",
				"https://iprice.my/trends/technology/",
				"https://iprice.my/trends/technology/10-tech-deals-for-hari-raya-2019-at-shopee-malaysia/",
				//coupons
				"https://iprice.my/coupons/",
				"https://iprice.my/coupons/stores/",
				"https://iprice.my/coupons/e-wallet/",
				"https://iprice.my/coupons/foodpanda/",
				"https://iprice.my/coupons/foodpanda/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F",
				//homepage
				"https://iprice.my/",
				//404
				"https://iprice.my/casdazx/",
				//redirect
				"https://iprice.my/r/c/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F"

			],
			output: "uglify-class-dictionary.json"
		 }
		// ,{
		// 	urls: [
		// 		"https://iprice.my/apple/",
		// 		"https://iprice.my/bear/appliances/?show-filter=1",
		// 		"https://iprice.my/shoes/",
		// 	],
		// 	output: "plp.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/compare/apple-iphone-7/",
		// 		"https://iprice.my/compare/apple-iphone-7-32gb-gold/",
		// 		"https://iprice.co.id/harga/asus-zenfone-6-32gb-hitam/"
		// 	],
		// 	output: "pdp.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/trends/",
		// 		"https://iprice.my/trends/technology/10-tech-deals-for-hari-raya-2019-at-shopee-malaysia/"
		// 	],
		// 	output: "trends.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/coupons/foodpanda/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F",
		// 		"https://iprice.my/coupons/",
		// 		"https://iprice.my/coupons/stores/",
		// 		"https://iprice.my/coupons/e-wallet/",
		// 		"https://iprice.my/coupons/foodpanda/",
		// 	],
		// 	output: "coupons.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/"
		// 	],
		// 	output: "homepage.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/casdazx/"
		// 	],
		// 	output: "page404.json"
		// },
		// {
		// 	urls: [
		// 		"https://iprice.my/r/c/?_id=3787b5564086eb13126af9f13275d67d51a9ef00&position=1&sub_product=coupon-store&_exit=%2Fcoupons%2Ffoodpanda%2F"
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