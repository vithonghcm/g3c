'use strict';

const service = require('feathers-mongoose');
const vatPham = require('./vatPham-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: vatPham,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/vatPhams', service(options));

  // Get our initialize service to that we can bind hooks
  const vatPhamService = app.service('/vatPhams');

  // Set up our before hooks
  vatPhamService.before(hooks.before);

  // Set up our after hooks
  vatPhamService.after(hooks.after);
};
