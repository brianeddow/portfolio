var mongoose = require('mongoose');
var Products = mongoose.model('Products');
module.exports = {

  show_one: function(req, res) {
    Products.find({name: req.params.name}, function(err,  product) {
      res.json({product: product});
    })
  },

  show: function(req, res) {
    Products.find({}, function(err, products) {
      // console.log("customers from backend controller:",customers);
      res.json(products);
    })
  },

  create: function(req, res) {
    Products.create(req.body, function(err, product) {
      if(err){
        console.log("something went wrong");
      } else {
        res.json(product);
      }
    })
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Products.remove({_id: req.params.id}, function(err, products){
      res.json(products);
    })
  },

  // decrement: function(req, res) {
  //   Products.update({_id: req.params.id},{$inc: {quanity: -req.params.quantity}}, function(err, product){
      
  //   })
  // }
  
}