// Setting up connection to the MySQL DB
var mysql = require("mysql")
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",  
  password: "Goof4ball$",
  database: "burgers_db"
});

// const mysql = require('mysql');
// let connection; 
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",  
//     password: "Goof4ball$",
//     database: "burgers_db"
//   })
// }

// Establishing connection to DB
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;