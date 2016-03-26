var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //call get function from models
      models.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //add to DB
      models.post(res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

