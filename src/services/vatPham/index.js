'use strict';

const service = require('feathers-mongoose');
const vatPham = require('./vatPham-model');
const nguoiBan = require('./nguoiBan-model');
const ttVatPham = require('./ttVatPham-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: vatPham,
    paginate: {
      default: 25,
      max: 25
    }
  };
  const options1 = {
    Model: nguoiBan,
    paginate: {
      default: 25,
      max: 25
    }
  };
  const options2 = {
    Model: ttVatPham,
    paginate: {
      default: 50,
      max: 50
    }
  };

  // Initialize our service with any options it requires
  app.use('/vatPhams', service(options));
   app.use('/nguoiBans', service(options1));
    app.use('/ttVatPhams', service(options2));

  // Get our initialize service to that we can bind hooks
  const vatPhamService = app.service('/vatPhams');
   const nguoiBanService = app.service('/nguoiBans');
   const ttVatPhamService = app.service('/ttVatPhams');

  // Set up our before hooks
  vatPhamService.before(hooks.before);
  nguoiBanService.before(hooks.before);
  ttVatPhamService.before(hooks.before);

  // Set up our after hooks
  vatPhamService.after(hooks.after);
  nguoiBanService.after(hooks.after);
  ttVatPhamService.after(hooks.after);
};
