'use strict';

// danhMuc-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const danhMucSchema = new Schema({
  color: { type: String, required: true },
  idDM: { type: String, required: true },
  tenDM: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const danhMucModel = mongoose.model('danhMuc', danhMucSchema);

module.exports = danhMucModel;