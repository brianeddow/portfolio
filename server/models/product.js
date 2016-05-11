var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  desc: String,
  quantity: Number
})

var Products = mongoose.model('Products', ProductSchema);