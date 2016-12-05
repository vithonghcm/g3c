'use strict';

const service = require('feathers-mongoose');
const danhMuc = require('./danhMuc-model');
const doiTuong = require('./doiTuong-model');
const nguyenLieu = require('./nguyenLieu-model');
const dMuc = require('./dMuc-model');
const DM1 = require('./DM1-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: danhMuc,
    paginate: {
      default: 25,
      max: 25
    }
  };
const options1 = {
    Model: doiTuong,
    paginate: {
      default: 25,
      max: 25
    }
  };
  const options2 = {
    Model: nguyenLieu,
    paginate: {
      default: 25,
      max: 25
    }
  };
   const options3 = {
    Model: dMuc,
    paginate: {
      default: 25,
      max: 25
    }
  };
  const options4 = {
    Model: DM1,
    paginate: {
      default: 25,
      max: 25
    }
  };
  // Initialize our service with any options it requires
  app.use('/danhMucs', service(options));
  app.use('/doiTuongs', service(options1));
app.use('/nguyenLieus', service(options2));
app.use('/dMucs', service(options3));
app.use('/DM1s', service(options4));

  // Get our initialize service to that we can bind hooks
  const danhMucService = app.service('/danhMucs');
  const doiTuongService = app.service('/doiTuongs');
const nguyenLieuService = app.service('/nguyenLieus');
const dMucService = app.service('/dMucs');
const DM1Service = app.service('/DM1s');
  // Set up our before hooks
  danhMucService.before(hooks.before);
   doiTuongService.before(hooks.before);
nguyenLieuService.before(hooks.before);
dMucService.before(hooks.before);
DM1Service.before(hooks.before);
  // Set up our after hooks
  danhMucService.after(hooks.after);
  doiTuongService.after(hooks.after);
  nguyenLieuService.after(hooks.after);
  dMucService.after(hooks.after);
  DM1Service.after(hooks.after);
};
