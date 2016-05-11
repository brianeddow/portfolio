var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  name: String,
  product: String,
  quantity: Number,
  created_at: {type: Date, default: Date()}
})

var Orders = mongoose.model('Orders', OrderSchema);
