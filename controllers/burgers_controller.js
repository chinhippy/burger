const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js')

// Create routes and setup logic for each route where required.

router.get('/', (req, res) => {
  burger.all(
    // cb info for burger.js file
    function(data) {
      var hbsBurger = {
        burgers: data
      };
      console.log(hbsBurger)
      res.render('index', hbsBurger)
    });
});

router.post('/api/burgers', (req, res) => {
  burger.create(
    // ['burger_name', 'devoured'],
    ['burger_name'], [ req.body.burger_name],
    // [req.body.burger_name, req.body.devoured],
    (result) =>{
      res.json({
        id: result.insertId
      });
    });
});

router.put('/api/burgers/:id', (req, res) => {
  let params1 = 'id = ' + req.params.id
  console.log('Paramater to Update: ' + params1)

  burger.update({
      // keyValue info for burger.js file
      devoured: req.body.devoured
    },
    // condition info for burger.js file
    params1,
    // cb info for burger.js file
    (result) => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router