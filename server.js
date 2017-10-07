var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
app = express();



// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require('./routes/apiroutes.js')(app);
require('./routes/htmlroutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
