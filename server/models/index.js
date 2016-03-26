var db = require('../db');
var mysql = require('mysql');
var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      connection.query('SELECT message FROM messages', function(err, rows, fields) {
        if (err) {
          console.log(err);
          res.status(404).send(err);
        } else {
          console.log('ROWS: ' + JSON.stringify(rows) + '   FIELDS: ' + JSON.stringify(fields));
          res.status(200).send(rows);
        }
      });

    }, // a function which produces all the messages
    post: function (data) {
      console.log('Data (MESSAGES): ', JSON.parse(data.message));
      connection.query('INSERT INTO messages VALUES (' + JSON.parse(data.message) + ')');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      console.log('Data (USERS): ', data);
    }
  }
};

