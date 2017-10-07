// Dependancy
var scraperjs = require("scraperjs");
// returns card name and price
// modern masters 2017
// aether revolt
// eternal masters
// splitting capitalizing joining
function prepParam (param) {
	var arr = param.split(" ");
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join("_");
}

function runSearch (setName, cardName) {

var url = "http://www.mtgprice.com/sets/" + prepParam(setName) + "/" + prepParam(cardName);

scraperjs.StaticScraper.create(url)
	.scrape(function ($) {
		// console.log($("#card-name"));
		
		return $("#card-name").map(function() {
			return $(this).text();
		}).get();
		
	})
	.then(function (price) {
		var newPrice = price[0].split('\r\n');
		var name = newPrice[0];
		var price = Number(newPrice[1].slice(newPrice[1].indexOf('$') + 1).trimRight());
		var set = newPrice[2].slice(newPrice[2].indexOf(':') + 2);
		console.log(name);
		console.log(price);
		console.log(set);
	});



// returns image for card
// var scraperjs = require("scraperjs");
scraperjs.StaticScraper.create(url)
	.scrape(function ($) {		
		return $("#heroPhone").map(function() {
			return $(this).attr('src');
		}).get();
		
	})
	.then(function (price) {
		console.log(price[0]);
})

// run search end
}

module.exports = runSearch;

