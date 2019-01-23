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
    var array = [];

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
    selectAll: function (db_table, cb) {
        let queryString = 'SELECT * FROM ' + db_table + ';';

        console.log('SELECT ALL: ' + queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    insertOne: function (db_table, db_col, db_row, cb) {
        let queryString =
            'INSERT INTO ' + db_table + ' (' + db_col.toString() + ') ' +
            'VALUES (' + questionMarks(db_row.length) + ')';

        console.log('INSERT ONE: ' + queryString)

        connection.query(queryString, db_row, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    updateOne: function (db_table, keyValue, condition, cb) {
        let queryString = 'UPDATE ' + db_table + ' SET ' + convertObject(keyValue) + ' WHERE ' + condition;

        console.log('UPDATE ONE: ' + queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
}

module.exports = orm;