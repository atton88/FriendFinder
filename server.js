// Andrew Ton
// Friend Finder

// require npm packages
var express = require("express");
var bodyParser = require("body-parser");

// initialize express
var app = express();
var PORT = process.env.PORT || 8080;


// initialize body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require route js files
var apiRoutes = require("./app/routing/apiRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

// start listening on server
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });