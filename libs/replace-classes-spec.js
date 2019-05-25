const replaceClasses = require("./replace-classes");
const classTable = require("./class-table.json");
describe("replace-classes", () => {
	describe("setClassesTable", () => {
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
		// 		classTable.data
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
		// 		classTable.data
		// 	);
		// 	let inputText = `<span class="name blue"> <b class="blue">Logitech</b> M170 </span>`;
		// 	let expected = `<span class="n9 at"> <b class="at">Logitech</b> M170 </span>`;
		// 	console.time("replace");
		// 	let outputText = replaceClasses.replaceText(inputText);
		// 	console.timeEnd("replace");
		//
		// 	expect(expected).toEqual(outputText);
		// });
		it("should return correct data4", () => {
			replaceClasses.setClassesTable(
				classTable.data
			);
			let inputText = `z zq zz dm">−12%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Huawei Matebook 13" data-vars-extras="position:6" href="https://iprice.my/compare/huawei-matebook-13/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 3 Stores </strong></a> </div> <div id="pc7" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:Old money Coin&#039;s|sellerRating:0.00" rel="nofollow" data-vars-extras="position:7" href="/r/pc/?_id=6876217de083352287c77d8a897eeb498afcb134&position=7&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_80bdb177603a7a1d2a594064051320c9.jpg" alt="HP HP Pavilion 15" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">HP</b> Pavilion 15 </span> <span class="oa s oz"> <span class="oc s z cv">RM 1,800.00</span> <span class="zq on oo op z zk"> RM 2,000.00 </span> <span class="oc z zq zz dm">−10%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="HP Pavilion 15" data-vars-extras="position:7" href="https://iprice.my/compare/hp-pavilion-15/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 1 Store </strong></a> </div> <div id="pc8" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline product crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazmall-by-lazada|lazmall.lazada.com.my|sellerName:Lazada Retail Apple Store|sellerRating:90.00" rel="nofollow" data-vars-extras="position:8" href="/r/p/?_id=cd6651b2be6db9f0f26ada50ebf6bbd03d549d07&position=8&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/32980023_0.jpg" alt="Apple Apple Mac Pro" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Apple</b> Mac Pro </span> <span class="oa s oz"> <span class="oc s z cv">RM 11,399.00</span> <span class="zq on oo op z zk"> RM 13,161.00 </span> <span class="oc z zq zz dm">−13%</span> </span> </span> <button class="zq zw z cu zz ke cm od"> Go to Shop </button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a> </div> <div id="pc9" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:Flora Wood Perfumes|sellerRating:100.00" rel="nofollow" data-vars-extras="position:9" href="/r/pc/?_id=10375ae28466ef46dc9553a8aca5c0acd617ab76&position=9&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_eca5ad696ae30c49ab2eefd734555225.jpg" alt="HP HP OMEN" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">HP</b> OMEN </span> <span class="oa s oz"> <span class="oc s z cv">RM 3,500.00</span> <span class="zq on oo op z zk"> RM 4,500.00 </span> <span class="oc z zq zz dm">−22%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="HP OMEN" data-vars-extras="position:9" href="https://iprice.my/compare/hp-omen/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 6 Stores </strong></a> </div> <div id="pc10" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:7 Heaven|sellerRating:92.00" rel="nofollow" data-vars-extras="position:10" href="/r/pc/?_id=adaa03fe9b0b74ac801ad3117750e1c763093d5f&position=10&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_07365e1e5b88bf5845297771c87c8a0c.jpg" alt="Epson Epson L360" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Epson</b> L360 </span> <span class="oa s oz"> <span class="oc s z cv">RM 424.00</span> <span class="zq on oo op z zk"> RM 599.00 </span> <span class="oc z zq zz dm">−29%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Epson L360" data-vars-extras="position:10" href="https://iprice.my/compare/epson-l360/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 4 Stores </strong></a> </div> <div id="pc11" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="amazon|amazon.com" rel="nofollow" data-vars-extras="position:11" href="/r/pc/?_id=33cf4af8f474d20cc78725bffa679b6fa0a16073&position=11&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_f3be406dbcc831ae9cd6449db5ebc7fa.jpg" alt="HP HP Pavilion x360" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">HP</b> Pavilion x360 </span> <span class="oa s oz"> <span class="oc z cv"> RM 1,806.64 </span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="HP Pavilion x360" data-vars-extras="position:11" href="https://iprice.my/compare/hp-pavilion-x360/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 8 Stores </strong></a> </div> <div id="pc12" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="shopee|shopee.com.my" rel="nofollow" data-vars-extras="position:12" href="/r/pc/?_id=952be4ba90c9ee81eba1a56a69095ae5b2e7a7fe&position=12&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_3f9d2b5a2f01b12006345bc12261ae10.jpg" alt="Logitech Logitech G502" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Logitech</b> G502 </span> <span class="oa s oz"> <span class="oc s z cv">RM 255.00</span> <span class="zq on oo op z zk"> RM 270.00 </span> <span class="oc z zq zz dm">−5%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Logitech G502" data-vars-extras="position:12" href="https://iprice.my/compare/logitech-g502/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 7 Stores </strong></a> </div> <div id="pc13" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:mybestmy|sellerRating:94.00" rel="nofollow" data-vars-extras="position:13" href="/r/pc/?_id=16feef887acb572b04e8ada3b214b387da5fc46a&position=13&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_9adb25490d5064e8a2fa2bf6e3312284.jpg" alt="HP HP ENVY 13" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">HP</b> ENVY 13 </span> <span class="oa s oz"> <span class="oc s z cv">RM 2,999.00</span> <span class="zq on oo op z zk"> RM 4,088.00 </span> <span class="oc z zq zz dm">−26%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="HP ENVY 13" data-vars-extras="position:13" href="https://iprice.my/compare/hp-envy-13/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 1 Store </strong></a> </div> <div id="pc14" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:IT COMP|sellerRating:95.00" rel="nofollow" data-vars-extras="position:14" href="/r/pc/?_id=ff1ced26785d0a0c531006708522fcbf25c1419e&position=14&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_c11e678afa03248adf1978a2c8fbda58.jpg" alt="Epson Epson LQ-310" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Epson</b> LQ-310 </span> <span class="oa s oz"> <span class="oc s z cv">RM 626.88</span> <span class="zq on oo op z zk"> RM 699.00 </span> <span class="oc z zq zz dm">−10%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Epson LQ-310" data-vars-extras="position:14" href="https://iprice.my/compare/epson-lq-310/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 2 Stores </strong></a> </div> <div id="pc15" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="shopee|shopee.com.my" rel="nofollow" data-vars-extras="position:15" href="/r/pc/?_id=78c52966bc4fc2edd6538e8fe5c4d11d6ba70eca&position=15&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_9063e03bbbed47de63d16b038a822dbb.jpg" alt="Adobe Adobe Photoshop CS6" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Adobe</b> Photoshop CS6 </span> <span class="oa s oz"> <span class="oc z cv"> RM 850.00 </span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Adobe Photoshop CS6" data-vars-extras="position:15" href="https://iprice.my/compare/adobe-photoshop-cs6/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 2 Stores </strong></a> </div> <div id="pc16" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="shopee|shopee.com.my" rel="nofollow" data-vars-extras="position:16" href="/r/pc/?_id=d290669afe1618a3b0e7ea7a070578b282e1c881&position=16&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_d4ac38951e996c1c102f19b342c5544b.jpg" alt="Canon Canon PIXMA E410" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Canon</b> PIXMA E410 </span> <span class="oa s oz"> <span class="oc z cv"> RM 135.00 </span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Canon PIXMA E410" data-vars-extras="position:16" href="https://iprice.my/compare/canon-pixma-e410/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 6 Stores </strong></a> </div> <div id="pc17" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:United Mobile|sellerRating:93.00" rel="nofollow" data-vars-extras="position:17" href="/r/pc/?_id=7093a654e980d81bbe244a536b6f4f086c7c0331&position=17&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/7093a654e980d81bbe244a536b6f4f086c7c0331_0.jpg" alt="Microsoft Microsoft Surface Book 2" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Microsoft</b> Surface Book 2 </span> <span class="oa s oz"> <span class="oc s z cv">RM 5,999.00</span> <span class="zq on oo op z zk"> RM 6,781.00 </span> <span class="oc z zq zz dm">−11%</span> </span> </span> <button class="zq zw z cu zz ke cm od">Go to Shop</button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a><a class="zz dg s c8 ml v fh of nz d4 h9 cd og oh n1 n0 z4 oi" data-vars-cgt="click_comparable_product" data-vars-lb="Microsoft Surface Book 2" data-vars-extras="position:17" href="https://iprice.my/compare/microsoft-surface-book-2/" rel="follow"> <span class="zk zw at ok">Compare Prices in</span> <strong class="zk zw at"> 3 Stores </strong></a> </div> <div id="pc18" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline product crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lazada|lazada.com.my|sellerName:GLOBAL HOMEBOYMALL|sellerRating:100.00" rel="nofollow" data-vars-extras="position:18" href="/r/p/?_id=21a58060d815966035bed01a3211612ef1da40bb&position=18&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_061aa2f9011f1d88ae299cba85d9fa42.jpg" alt="Epson Epson L210" > </amp-img> </div> <span class="n7 lm n3 n4 n8 n5"> <span class="name blue lh-title overflow-hidden h33"> <b class="at">Epson</b> L210 </span> <span class="oa s oz"> <span class="oc s z cv">RM 1,144.00</span> <span class="zq on oo op z zk"> RM 1,710.00 </span> <span class="oc z zq zz dm">−33%</span> </span> </span> <button class="zq zw z cu zz ke cm od"> Go to Shop </button> <div class="h o c4 ek qp nz ci od al am"> <i class="iprice-listing-icons-sprite i-arrow-right db"></i> </div></a> </div> <div id="pc19" class=" ns ce z4 ac nt nu z3" > <a class="flex flex-column-l flex-row no-underline offer crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative" data-ga-trigger="ga-conversion" data-vars-action="shop" target="_blank" data-vars-merchant="lenovo|lenovo.com" rel="nofollow" data-vars-extras="position:19" href="/r/pc/?_id=6de5a98292d5a33a22ffd0014266bd52d4f50af1&position=19&sub_product=discovery-category&_exit=%2Fcomputing%2F"> <span class="ol c2 cm zq z zz om o fh c-">SALE</span> <div class="d9 n2 n3 n4 lc a5 n5 s"> <amp-img width="1" height="1" layout="responsive" src="https://p.ipricegroup.com/uploaded_bda0c284d3b07d03c909458c8315f076.jpg" alt="Lenovo Lenovo ThinkPad X1 Carbon" > </amp-img> </div>`;
			let expected = `<span class="n9 at"> <b class="at">Logitech</b> M170 </span>`;
			console.time("replace");
			let outputText = replaceClasses.replaceText(inputText);
			console.timeEnd("replace");

			expect(expected).toEqual(outputText);
		});
	});
});