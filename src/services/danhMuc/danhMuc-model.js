'use strict';

// danhMuc-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const danhMucSchema = new Schema({
danhMucs:[{
	color: { type: String, required: true },
	tenDM: { type: String, required: true },
	idDM: { type: String, required: true }
}],
nguyenLieus:[{
	color: { type: String, required: true },
	tenDM: { type: String, required: true },
	idDM: { type: String, required: true }
}],
doiTuongs:[{
	color: { type: String, required: true },
	tenDM: { type: String, required: true },
	idDM: { type: String, required: true }
}],
all:[{
	color: { type: String, required: true },
	tenDM: { type: String, required: true },
	idDM: { type: String, required: true }
}]
});

const danhMucModel = mongoose.model('danhMuc', danhMucSchema);

module.exports = danhMucModel;