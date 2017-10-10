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


//Create dummy object containing dummy info
var foo = {
    name: "Dummy premium set",
    type: "premium",
    rares: [
        {name:"FUBAR", price: 10},
        {name:"SNAFU", price: 9},
        {name:"SUSFU", price: 8},
        {name:"JANFU", price: 7}
    ],
    mythics:[
        {name:"Something", price: 20},
        {name:"Anything", price: 15},
        {name:"Everything", price: 10}
    ]
};

var baz = {
    name: "Dummy standard set",
    type: "standard",
    rares: [
        {name:"FUBAR2", price: 10},
        {name:"SNAFU2", price: 9},
        {name:"SUSFU2", price: 8},
        {name:"JANFU2", price: 7}
    ],
    mythics:[
        {name:"Something2", price: 20},
        {name:"Anything2", price: 15},
        {name:"Everything2", price: 10}
    ]
};

var baz2 = {
    name: "Dummy legacy set",
    type: "legacy",
    rares: [
        {name:"FUBAR3", price: 10},
        {name:"SNAFU3", price: 9},
        {name:"SUSFU3", price: 8},
        {name:"JANFU3", price: 7}
    ],
    mythics:[
        {name:"Something3", price: 20},
        {name:"Anything3", price: 15},
        {name:"Everything3", price: 10}
    ]
};

var input1 = [foo, 1];
var input2 = [baz, 1];
var input3 = [baz2, 1];
var count = 0;
var mythic = 0;
var value = 0;
var average = 0;

function master(arr){
    switch(arr[0].type){
        case "premium":
            count = 0;
            mythic=0;
            crackEm(arr[1], 24, arr[0]);
            average = value/(24*arr[0]);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            console.log(count);
            console.log(mythic);
            console.log(value);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            break;
        case "standard":
            count = 0;
            mythic=0;
            crackEm(arr[1], 36, arr[0]);
            average = value/(36*arr[0]);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            console.log(count);
            console.log(mythic);
            console.log(value);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            break;
        case "legacy":
            count = 0;
            mythic=0;
            crackEm(arr[1], 36, arr[0]);
            average = value/(36*arr[0]);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            console.log(count);
            console.log(mythic);
            console.log(average);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            break;
    }
};

function crackEm(iter, packNum, set){
    var value = 0;
    for(var i = 0; i<iter; i++){
        for(var j = 0; j<packNum; j++){
            var dieRoll = Math.floor(Math.random()*9);
            var pulled;
            switch(dieRoll){
                case 1:
                    pulled = set.mythics[Math.floor(Math.random()*set.mythics.length)];
                    console.log("**************************");
                    console.log("Mythic!!: " + pulled.name);
                    console.log("Value: " + pulled.price);
                    console.log("**************************");
                    value +=  pulled.price;
                    count++;
                    mythic++;
                    break;
                default:
                    pulled=set.rares[Math.floor(Math.random()*set.rares.length)];
                    console.log("==========================");
                    console.log("Rare: " + pulled.name);
                    console.log("Value " + pulled.price);
                    console.log("==========================");
                    value +=  pulled.price;
                    count++;
                    break;
            }
        }
    }
};

master(input1);
master(input2);
master(input3);

module.exports = webLogic;