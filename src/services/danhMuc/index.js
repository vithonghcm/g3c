'use strict';

const service = require('feathers-mongoose');
const danhMuc = require('./danhMuc-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: danhMuc,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/danhMucs', service(options));

  // Get our initialize service to that we can bind hooks
  const danhMucService = app.service('/danhMucs');

  // Set up our before hooks
  danhMucService.before(hooks.before);

  // Set up our after hooks
  danhMucService.after(hooks.after);
};
