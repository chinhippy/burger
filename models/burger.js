//Connection to the ORM file
const orm = require('../config/orm.js')

const burger = {
  all: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res)
    });
  },

  create: (db_col, db_row, cb) => {
    orm.insertOne('burgers', db_col, db_row, (res) => {
      cb(res)
    });
  },

  update: (keyValue, condition, cb) => {
    orm.updateOne('burgers', keyValue, condition, (res) => {
      cb(res)
    });
  }
};
module.exports = burger;