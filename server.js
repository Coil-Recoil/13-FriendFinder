// NPM Packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Setting up express server 

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Adding file paths

require(path.join(__dirname, '/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Starting the app

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
