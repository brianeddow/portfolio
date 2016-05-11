var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  created_at: {type: Date, default: Date()}
})

var Customers = mongoose.model('Customers', CustomerSchema);
