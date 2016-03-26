var db = require('../db');
var mysql = require('../mysql');
var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function () {
      connection.query('SELECT message FROM messages', function(err, rows, fields) {
        if (err) {
          console.log(err);
        } else {
          console.log('ROWS: ' + rows + '   FIELDS: ' + fields);
        }
      });

    }, // a function which produces all the messages
    post: function (data) {
      console.log('Data (MESSAGES): ', data);
      // connection.query('INSERT INTO messages VALUES ()');
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

