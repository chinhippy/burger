//Connection to the ORM file
const orm = require('../config/orm')

var burger = {

  all: function(cb) {
    orm.selectAll(
      // db_table for orm.js file
      'burgers',

      // cb for orm.js file
      function(res) {
      cb(res)
    })
  },

  create: function(db_col, db_row, cb) {
    orm.insertOne(
      // db_table for orm.js file
      'burgers', 
      
      // db_col for orm.js file
      db_col, 
      
      // db_row for orm.js file
      db_row, 
      
      // cb for orm.js file
      function(res) {
      cb(res)
    })
  },

  update: function(keyValue, condition, cb) {
    orm.updateOne(
      // db_table for orm.js file
      'burgers', 
      
      // keyValue for orm.js file
      keyValue, 
      
      // condition for orm.js file
      condition, 
      
      // cb for orm.js file
      function(res) {
      cb(res)
    })
  }
}

module.exports = burger