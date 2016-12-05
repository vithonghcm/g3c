'use strict';
<<<<<<< HEAD
const traoDoi = require('./traoDoi');
=======

const danhMuc = require('./danhMuc');

>>>>>>> 529789d50613867eb4e9b77788dcf7a313297e4f
const userPost = require('./userPost');
const huongDan = require('./huongDan');
const vatPham = require('./vatPham');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(vatPham);
  app.configure(huongDan);
  app.configure(userPost);
<<<<<<< HEAD
  app.configure(traoDoi);
=======

  app.configure(danhMuc);
>>>>>>> 529789d50613867eb4e9b77788dcf7a313297e4f
};
