'use strict';

// nguoiBan-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nguoiBanSchema = new Schema({
  idNguoiBan: { type: String, required: true },
  tenNguoiBan: { type: String, required: true },
  imgNguoiBan: { type: String, required: true },
  thongTinNguoiBan: { type: String, required: true },
  diaChi: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const nguoiBanModel = mongoose.model('nguoiBan', nguoiBanSchema);

module.exports = nguoiBanModel;