// Dependencies
// =============================================================
var commandLogic = require("../db/commandLogic.js");
var connection = require("../config/connection.js");
// var webLogic = require("./db/webLogic");
// var runSearch = require("./lib/runSearch");

// Routes
// =============================================================
module.exports = function (app) {

   // GET ROUTE for finding the three most recent searches
   // ======================================= 
   app.get("/api/recent", function (req, res) {
      console.log(req.body);

      // var dbQuery = "SELECT * FROM search_history ORDER BY timestamp DESC LIMIT 3";
      var dbQuery = "SELECT * FROM search_history (set_name, quantity) VALUES (?, ?) ORDER BY timestamp DESC LIMIT 3";

      connection.query(dbQuery, [req.body.set_name, req.body.quantity], function (err, result) {
         console.log("Your Recent Searches");
         res.end();
      });
      
   });

   // POST route boyzzzz
   // ==================
   app.post("/api/posts", function (req, res) {
      console.log(req.body);
      res.json(commandLogic.master(req.body.Set, req.body.Quant));

   });

   // Add a new search result
   // =======================
   app.post("/api/new", function(req, res) {

      console.log("New Search:");
      console.log(req.body);

      var dbQuery = "INSERT INTO search_history (set_name, quantity) VALUES (?,?)";

      connection.query(dbQuery, [req.body.set_name, req.body.quantity], function(err, result) {
         console.log("New Search Saved");
         res.end();
      });

   });

};

