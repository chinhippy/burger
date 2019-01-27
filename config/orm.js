// Importing the connection for MySQL
const connection = require('../config/connection')

// Helper function for the SQL Syntax.  
// Will put a "?" for each value being passed through to the SQL script:
function questionMarks(num) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push('?')
    }
    return array.toString();
}

// Helper function for the SQL Syntax.
// Will convert the key/value pair to be used in the SQL script:
function convertObject(object) {
    let array = [];

    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + '=' + value);
        }
    }
    return array.toString();
}


// ORM Object to be used in the SQL Script, based on the request
const orm = {
    selectAll: (db_table, cb) => {
        let queryString = 'SELECT * FROM ' + db_table + ';';
        console.log('SELECT ALL: ' + queryString)

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    insertOne: (db_table, db_col, db_row, cb) => {
        // let queryString = 'INSERT INTO ' + db_table + ' (' + db_col.toString() + ') ' +
        //     'VALUES (' + questionMarks(db_row.length) + ')';

        let queryString = "INSERT INTO " + db_table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(db_row.length);
        queryString += ") ";

        console.log('INSERT ONE: ' + queryString)

        connection.query(queryString, db_row, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    updateOne: (db_table, keyValue, condition, cb) => {
        // let queryString = 'UPDATE ' + db_table + ' SET ' + convertObject(keyValue) + ' WHERE ' + condition;
        let queryString = 'UPDATE ' + db_table;

        queryString += ' SET ';
        queryString += convertObject(keyValue);
        queryString += ' WHERE ';
        queryString += condition;

        console.log('UPDATE ONE: ' + queryString)

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}

module.exports = orm;