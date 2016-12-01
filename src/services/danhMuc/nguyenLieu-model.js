'use strict';

// nguyenLieu-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nguyenLieuSchema = new Schema({
 color: { type: String, required: true },
  idDM: { type: String, required: true },
  tenDM: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const nguyenLieuModel = mongoose.model('nguyenLieu', nguyenLieuSchema);

module.exports = nguyenLieuModel;