//requirw express
var express = require("express");
var router = express.Router();

// require the burger model
var db = require("../models");


//routes
module.exports = function(app){

	// route to get all the burgers
	  app.get("/", function(req, res) {
	    
	    db.Burger.findAll({}).then(function(burgers){
	    	var hbsObject = {
      		burgers: burgers
    };
	      res.render("index", hbsObject);

	  });
	});

	 //route to post a new burger

	app.post("/", function(req, res) {

	  db.Burger.create({
	  burger_name: req.body.burger_name,
	 
	}).then(function() {
	  
	  res.redirect("/");
	});
	});

	//route to devour a burger
	app.put("/:id", function(req, res) {
  
    db.Burger.update({
    	devoured: true
    },
    {
      where:{
        id: req.body.id
      }
    })
    .then(function(burgers) {
      res.redirect("/");
  });
});


};