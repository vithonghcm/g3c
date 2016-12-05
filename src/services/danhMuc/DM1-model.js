'use strict';

// DM1-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DM1Schema = new Schema({
  idVatPham: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const DM1Model = mongoose.model('DM1', DM1Schema);

module.exports = DM1Model;