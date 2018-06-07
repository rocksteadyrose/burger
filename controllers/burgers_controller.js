// All of our router gets, posts, and puts are in this file

// Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the Customer Model. The same controller will be used to view the Customer data.

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  //Pass the burger data into the function
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/insertOne", function (req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect('/');
    });
});

router.put("/burgers/updateOne/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function (data) {
    res.redirect('/');
  });
});

router.delete("/burgers/deleteAll/", function (req, res) {
  burger.deleteAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;