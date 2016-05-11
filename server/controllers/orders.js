var mongoose = require('mongoose');
var Orders = mongoose.model('Orders');
var Products = mongoose.model('Products');
module.exports = {

  show_one: function(req, res) {
    Orders.find({_id: req.params.id}, function(err,  order) {
      res.json(order);
    })
  },

  show: function(req, res) {
    Orders.find({}, function(err, orders) {
      // console.log("customers from backend controller:",orders);
      res.json(orders);
    })
  },

  create: function(req, res) {
    Orders.create(req.body, function(err, order) {
      if(err){
        console.log("something went wrong");
      } else {
        console.log("req: ",req.body);
        Products.update({name: req.body.product}, {$inc: {quantity: -req.body.quantity}}, function(err, product){
          // console.log("decremented product quantity from mongo: ",product);
          res.json(order);
        })
      }
    })
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Orders.remove({_id: req.params.id}, function(err, orders){
      res.json(orders);
    })
  }
  
}