// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;

// module.exports = burger;
// var orm = require('../config/orm.js');
//
// var burger = {
//   selectAll: function(callback){
//     orm.selectAll('burgers', function(res){
//       callback(res);
//     });
//   },
//   getMenu: function(callback){
//     orm.selectAll('menu', function(res){
//       callback(res);
//     });
//   },
//   insertOne: function(val, callback){
//     orm.insertOne('burgers', 'burger_name', val, function(res){
//       callback(res);
//     });
//   },
//   updateOne: function(colVal, conditionVal, callback){
//     orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
//       callback(res);
//     });
//   },
//   deleteOne: function(conditionVal, callback){
//     orm.deleteOne('burgers', 'id', conditionVal, function(res){
//       callback(res);
//     });
//   }
// };
//
// module.exports = burger;
