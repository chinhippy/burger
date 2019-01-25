//Connection to the ORM file
const orm = require('../config/orm')

let burger = {
  all: function(cb) {
    orm.selectAll('burgers', (res) => {
      cb(res)
    })
  },

  create: function(db_col, db_row, cb) {
    orm.insertOne('burgers', db_col, db_row, (res) => {
      cb(res)
    })
  },

  update: function(keyValue, condition, cb) {
    orm.updateOne('burgers', keyValue, condition, (res) => {
      cb(res)
    })
  }
}

module.exports = burger