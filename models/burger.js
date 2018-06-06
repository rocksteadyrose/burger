// Import the ORM to create functions that will interact with the database. The burger.js file contains all the methods to modify our ORM for use with the burgers database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        //This cb is sent into our burgers_controller file
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteAll: function(cb) {
      orm.deleteAll("burgers", function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_Controller.js).
  module.exports = burger;
  