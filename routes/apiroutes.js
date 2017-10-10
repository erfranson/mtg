// Dependencies
// =============================================================
var commandLogic = require("../db/commandLogic");
// var webLogic = require("./db/webLogic");
// var runSearch = require("./lib/runSearch");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all info on cards
   // =======================================
   app.get("/api/gets", function (req, res) {
      res.json(commandLogic.master({}));
      
   });

   app.post("/api/posts", function (req, res) {
      
   })

/*
   // POST route for SEARCH and getting SPECIFIC cards
   app.post("/api/posts", function (req, res) {
      db.Post.crackEm({
         set: req.body.set,
         quantity: req.body.quantity
      }).then(function (results) {
         res.json(results);
      });
   });
*/

};

/*
 // POST route for saving a new post
 app.post("/api/posts", function (req, res) {
   console.log(req.body);
   // Add sequelize code for creating a post using req.body,
   // then return the result using res.json
   db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
   }).then(function (results) {
      res.json(results);
   })
 });
 */
