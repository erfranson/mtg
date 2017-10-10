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
var cardInfo = {};

var infoPromise = scraperjs.StaticScraper.create(url)
	.scrape(function ($) {
		// console.log($("#card-name"));
		
		return $("#card-name").map(function() {
			return $(this).text();
		}).get();
		
	})
	.then(function (price) {
		var newPrice = price[0].split('\r\n');
		cardInfo.name = newPrice[0];
		cardInfo.price = Number(newPrice[1].slice(newPrice[1].indexOf('$') + 1).trimRight());
		cardInfo.set = newPrice[2].slice(newPrice[2].indexOf(':') + 2);
	});



// returns image for card
// var scraperjs = require("scraperjs");
var imagePromise = scraperjs.StaticScraper.create(url)
	.scrape(function ($) {		
		return $("#heroPhone").map(function() {
			return $(this).attr('src');
		}).get();
		
	})
	.then(function (imageUrl) {
		cardInfo.imageUrl = imageUrl;
	});

return Promise.all([infoPromise, imagePromise]).then(function() {
	return cardInfo;
});

// run search end
}


module.exports = runSearch;

