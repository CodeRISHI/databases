var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//create connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'middleearth',
  database: 'chat'
});

connection.connect();

// connection.end();

module.exports = connection;
