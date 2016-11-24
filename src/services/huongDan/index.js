'use strict';

const service = require('feathers-mongoose');
const huongDan = require('./huongDan-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: huongDan,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/huongDans', service(options));

  // Get our initialize service to that we can bind hooks
  const huongDanService = app.service('/huongDans');

  // Set up our before hooks
  huongDanService.before(hooks.before);

  // Set up our after hooks
  huongDanService.after(hooks.after);
};
