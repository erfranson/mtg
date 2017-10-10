const assert = require("chai").assert;
const master = require("../../db/commandLogic.js");


describe("Logic", function () {
    it("app should return a number", function () {
        var result = master("AER", 1000000);
        console.log(result);
        assert.typeOf(result, "number")
    });
});