'use strict';
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
};
