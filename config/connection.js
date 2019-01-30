// Setting up connection to the MySQL DB
var mysql = require("mysql")
require("dotenv").config();
// let connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",  
//   password: "Goof4ball$",
//   database: "burgers_db"
// });

// let connection = mysql.createConnection({
//   host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "i4fc6dx8atov8c1d",  
//   password: "sbi4uikvgxra1v2z$",
//   database: "burlfl6fk4i12cm458vgers_db"

// });

let connection;
//Change NODE_ENV to 'production' to run live JAWSDB
if (process.env.JAWSDB_URL && process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
  console.log('hit jaws connection', connection)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",  
    password: "Goof4ball$",
    database: "burgers_db"
  }); 
  console.log('oops, hit local connection', connection)
}




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