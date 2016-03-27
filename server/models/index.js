var db = require('../db');
var mysql = require('mysql');
var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      connection.query('select message, username from messages inner join users on messages.userref = users.userid', function(err, rows, fields) {
        if (err) {
          console.log(err);
          res.status(404).send(err);
        } else {
          res.status(200).send(rows);
        }
      });

    }, // a function which produces all the messages
    post: function (data) {
      // console.log(data.body.text);
      console.log(JSON.stringify(data.body) + ' <=-------------- posted data');
      //username
      connection.query('SELECT username FROM users', function(err, rows, fields) {
        // console.log('username: --------------->', rows[rows.length - 1].username);
        //check if user in users table
        // console.log(JSON.stringify(rows) + '--------------------> ROWS');
        // check if user is in 'users', if not add user
        for (var i = 0; i < rows.length; i++) {
          if (rows[i].username === data.body.username) {
            connection.query('SELECT userid FROM users WHERE username = ' + '"' + data.body.username + '"', function(err, rows, fields) {
              var userId = rows[0].userid;
              // console.log(JSON.stringify(rows) + ' <---------- userid');
              //roomname
              connection.query('SELECT roomid FROM rooms WHERE roomname = ' + '"' + data.body.roomname + '"', function(err, rows, fields) {
                var currRoomId = rows[0].roomid;
                //messageid
                connection.query('SELECT messageid FROM messages', function(err, rows, fields) {
                  var currMessageId = rows[rows.length - 1].messageid + 1;
                  console.log(currMessageId + ' <----------- MESSAGEID');
                  console.log(currRoomId + ' <----------- ROOMID');
                  connection.query('INSERT INTO messages (messageid, message, userref, roomref) VALUES (' + currMessageId + ', ' + '"' + data.body.text + '"' + ', ' + userId + ', ' + currRoomId + ')');
                });
              });
            });
          }  
        }
      });  



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
      // console.log('Data (USERS): ', JSON.parse(data.username));
      // connection.query('INSERT INTO users VALUES (' + JSON.parse(data.username) + ')');
    }
  }
};

