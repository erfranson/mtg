/*
* Steps the logic needs to accomplish:
*
* 1) Check whether the set is premium or not (this will be hard)
* 2) Based on that either run stats for a premium or standard set (36 or 24 packs)
* 3) Be able to randomize if rare or mythic
* 4) Be able to randomize from rare or mythic pool based on that
* 5) Be able to push the selected card object to an array
* 6) Prepend a div on the page containing that card's info
* 7) Run that process the required number of times
*
* Other ToDos:
*
* 2) figure out URL parsing
* 3) figure out scraping with curl and cheerio.js
* */


// //Use linked scraper and cheeriojs for gathering info
// https://nodejs.org/docs/v0.5.2/api/http.html#http.request
//
// https://cheerio.js.org/


//Dependencies
var inquire = require("inquirer");

//Global Variables
var rare = [
    { name: "Wasteland", price: 27.94},
    { name: "Sylvan Library", price: 15.73},
    { name: "Sensei's Divining Top", price: 14.24},
    { name: "Entomb", price: 12.07},
    { name: "Enlightened Tutor", price: 11.68},
    { name: "Maze of Ith", price: 9.49},
    { name: "Toxic Deluge", price: 8.00},
    { name: "Mystical Tutor", price: 6.41},
    { name: "Wrath of God", price: 6.14},
    { name: "Gamble", price: 6.00},
    { name: "Vindicate", price: 5.69},
    { name: "Green Sun's Zenith", price: 5.69},
    { name: "Sinkhole", price: 4.67},
    { name: "Deathrite Shaman", price: 4.54},
    { name: "Heritage Druid", price: 4.42},
    { name: "Winter Orb", price: 3.61},
    { name: "Shardless Agent", price: 3.60},
    { name: "Duplicant", price: 3.47},
    { name: "Isochron Scepter", price: 3.37},
    { name: "Baleful Strix", price: 2.99},
    { name: "Mother of Runes", price: 2.34},
    { name: "Karmic Guide", price: 2.24},
    { name: "Regal Force", price:2.02},
    { name: "Siege-Gang Commander", price: 1.67},
    { name: "Imperious Perfect", price: 1.55},
    { name: "Eight-and-a-Half-Tails", price: 1.41},
    { name: "Arcanis the Omnipotent", price: 1.30},
    { name: "Nevinyrral's Disk", price: 1.24},
    { name: "Goblin Charbelcher", price: 1.19},
    { name: "Brago, King Eternal", price: 1.17},
    { name: "Ichorid", price: 1.16},
    { name: "Visara the Dreadful", price: 1.00},
    { name: "Malicious Affliction", price: 0.00},
    { name: "Unexpectedly Absent", price: 0.00},
    { name: "Dualcaster Mage", price: 0.00},
    { name: "Xantid Swarm", price: 0.00},
    { name: "Sulfuric Vortex", price: 0.00},
    { name: "Control Magic", price: 0.00},
    { name: "Inkwell Leviathan", price: 0.00},
    { name: "Braids, Cabal Minion", price: 0.00},
    { name: "Future Sight", price: 0.00},
    { name: "Silvos, Rogue Elemental", price: 0.00},
    { name: "Glare of Subdual", price: 0.00},
    { name: "Jareth, Leonine Titan",  price: 0.00},
    { name: "Serendib Efreet", price: 0.00},
    { name: "Diminishing Returns", price: 0.00},
    { name: "Void", price: 0.00},
    { name: "Pyrokinesis", price: 0.00},
    { name: "Rorix Bladewing", price: 0.00},
    { name: "Goblin Trenches", price: 0.00},
    { name: "Call the Skybreaker", price: 0.00},
    { name: "Giant Solifuge", price: 0.00},
    { name: "Crater Hellion", price: 0.00}
];
var mythic = [
    { name: "Force of Will", price: 79.99},
    { name: "Mana Crypt", price: 77.59},
    { name: "Jace, the Mind Sculptor", price: 63.64},
    { name: "Vampiric Tutor", price: 42.00},
    { name: "Karakas", price: 38.45},
    { name: "Sneak Attack", price: 20.76},
    { name: "Chrome Mox", price: 15.90},
    { name: "Natural Order", price: 14.90},
    { name: "Dack Fayden", price: 13.77},
    { name: "Maelstrom Wanderer", price: 8.41},
    { name: "Necropotence", price: 7.70},
    { name: "Argothian Enchantress", price: 5.14},
    { name: "Balance", price: 1.79},
    { name: "Worldgorger Dragon", price: 1.25},
    { name: "Sphinx of the Steel Wind", price: 1.10}
];
var mythics = 0;
var pulled = [];

function packCracker() {
    var rareSlot;
    var rom = Math.floor(Math.random() * 8);

    if (rom === 7) {
        rareSlot = mythic[Math.floor(Math.random() * mythic.length)];
        mythics++;

        pulled.push(rareSlot);
    }
    else {
        rareSlot = rare[Math.floor(Math.random() * rare.length)];

        pulled.push(rareSlot);
    }
}


function boxCracker(){
    mythics = 0;
    for(var i = 0; i<24; i++){
        packCracker();
    }
}

function averages(){
    var averageM = 0;
    for(var j = 0; j<1000; j++){
        boxCracker();
        averageM=averageM+mythics;
    }

    var average = Math.floor(averageM/1000);

    console.log("On average you will pull " + average + " Mythic rares");

}


function UI() {
    inquire.prompt([
        {
            type: "list",
            name: "function",
            message: "Which would you like to simulate?",
            choices: ["Cracking a pack", "Cracking a box", "Averages for cracking 1000 boxes", "Averages for cracking 1000000 boxes"]
        }
    ]).then(function (results) {
        switch (results.function) {
            case "Cracking a pack":
                packCracker();
                console.log(pulled);
                var value = 0;
                for(var k = 0; k<pulled.length; k++){
                    value = value+pulled[k].price;
                }
                console.log("You pulled $" + value + " of value from this pack");
                pulled = [];
                break;
            case "Cracking a box":
                boxCracker();
                console.log(pulled);
                var value = 0;
                for(var k = 0; k<pulled.length; k++){
                    value = value+pulled[k].price;
                }
                console.log("You pulled $" + value + " of value from this box");
                pulled = [];
                break;
            case "Averages for cracking 1000 boxes":
                averages();
                var value = 0;
                for(var k = 0; k<pulled.length; k++){
                    value = value+pulled[k].price;
                }
                value = value/1000;
                console.log("You averaged $" + value + " of value per box");
                pulled = [];
                break;
            case "Averages for cracking 1000000 boxes":
                for(var l = 0; l<1000; l++){
                    averages();
                }
                var value = 0;
                for(var k = 0; k<pulled.length; k++){
                    value = value+pulled[k].price;
                }
                value = value/1000000;
                console.log("You averaged $" + value + " of value per box");
                pulled = [];
                break;
        }

        UI();
    });

}

UI();