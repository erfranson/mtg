// Dependencies
// =============================================================
var db = require("../db");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all info on cards
   // =======================================
   app.get("/api/posts", function (req, res) {
      db.Post.master({})
      .then(function (dbPost) {
         res.json(dbPost);
      });
   });


};