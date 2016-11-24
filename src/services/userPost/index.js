'use strict';

const service = require('feathers-mongoose');
const userPost = require('./userPost-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: userPost,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/userPosts', service(options));

  // Get our initialize service to that we can bind hooks
  const userPostService = app.service('/userPosts');

  // Set up our before hooks
  userPostService.before(hooks.before);

  // Set up our after hooks
  userPostService.after(hooks.after);
};
