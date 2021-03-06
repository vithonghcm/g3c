'use strict';

// vatPham-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vatPhamSchema = new Schema({
<<<<<<< HEAD
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  idVatPham: { type: String, required: true },
  idNguoiBan: { type: String, required: true },
  imgNguoiBan: { type: String, required: true },
  tenVatPham: { type: String, required: true },
  giaGoc: { type: Number, required: true },
  giaGiam: { type: Number, required: true },
  ngayDang: { type: Date, required: true },
  imgSanPham: { type: String, required: true }  
=======
  idVatPham: { type: String, required: true },
  idNguoiBan: { type: String, required: true },
  nguoiBan: { type: String, required: true },
  imgNguoiBan: { type: String, required: true },
  tenVatPham: { type: String, required: true },
  giaGoc: { type: Number, required: true },
  giaGiam: { type: Number, required: false },
  imgSanPham: { type: String, required: true },
  description: { type: String, required: true },
  ngayDang: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
>>>>>>> 529789d50613867eb4e9b77788dcf7a313297e4f
});

const vatPhamModel = mongoose.model('vatPham', vatPhamSchema);

module.exports = vatPhamModel;