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
          // console.log('ROWS: ' + JSON.stringify(rows) + '   FIELDS: ' + JSON.stringify(fields));
          res.status(200).send(rows);
        }
      });

    }, // a function which produces all the messages
    post: function (data) {
      console.log(typeof data.body.text);
      var currMessageId;
      //username
      connection.query('SELECT username FROM users', function(err, rows, fields) {
        console.log('username: --------------->', rows[rows.length - 1].username);
      });     

      //messageid
      connection.query('SELECT messageid FROM messages', function(err, rows, fields) {
        currMessageId = JSON.stringify(rows[rows.length - 1].messageid++);      
      });

      // console.log('Data (MESSAGES): ', JSON.parse(data.message));
      connection.query('INSERT INTO messages (messageid, message, userref, roomref) VALUES (' + currMessageId + ', ' + data.body.text + ', ' + 2 + ', ' + 1 + ')');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      connection.query('SELECT username FROM users', function(err, rows, fields) {
        if (err) {
          console.log(err);
          res.status(404).send(err);
        } else {
          console.log('ROWS: ' + JSON.stringify(rows) + '   FIELDS: ' + JSON.stringify(fields));
          res.status(200).send(rows);
        }
      });
    },
    post: function (data) {
      console.log('Data (USERS): ', JSON.parse(data.username));
      connection.query('INSERT INTO users VALUES (' + JSON.parse(data.username) + ')');
    }
  }
};

