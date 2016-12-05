'use strict';

const service = require('feathers-mongoose');
const traoDoi = require('./traoDoi-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: traoDoi,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/traoDois', service(options));

  // Get our initialize service to that we can bind hooks
  const traoDoiService = app.service('/traoDois');

  // Set up our before hooks
  traoDoiService.before(hooks.before);

  // Set up our after hooks
  traoDoiService.after(hooks.after);
};
