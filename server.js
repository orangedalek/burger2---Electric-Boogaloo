//require packages, setup, funsies...
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

//link up to the burger model and maybe the customer model if I get there
var db = require("./models");

//Do the thing to make express work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

//Show me the handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//make some routes
// require("./routes/html_routes.js")(app);
var routes = require("./routes/api_routes.js")(app);




//sync the Titanic... or sequelize models and express
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});