'use strict';

// ttVatPham-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ttVatPhamSchema = new Schema({
  idVatPham: { type: String, required: true },
  idNguoiBan: { type: String, required: true },
  tenVatPham: { type: String, required: true },
  giaGoc: { type: Number, required: true },
  giaGiam: { type: Number,'default':0,  required: false },
  imgSanPham: { type: String,'default':'img/vatPham/default-img.jpg'  },
  description: { type: String, required: true },
  moTa: { type: String, required: true },
  ngayDang: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const ttVatPhamModel = mongoose.model('ttVatPham', ttVatPhamSchema);

module.exports = ttVatPhamModel;