'use strict';

// traoDoi-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traoDoiSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  tenVatPham: { type: String, required: true },
  imgVatPham: { type: String, required: true },
  danhMucVatPham: { type: String, required: true }
});

const traoDoiModel = mongoose.model('traoDoi', traoDoiSchema);

module.exports = traoDoiModel;