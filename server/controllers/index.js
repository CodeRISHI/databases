var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //call get function from models
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (data) {
      //add to DB
      console.log(data + ' <------------- data');
      models.messages.post(data);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

