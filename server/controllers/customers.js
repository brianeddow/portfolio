var mongoose = require('mongoose');
var Customers = mongoose.model('Customers');
module.exports = {

  show_one: function(req, res) {
    Customers.find({name: req.params.name}, function(err,  customers) {
      res.json({customers: customers});
    })
  },

  show: function(req, res) {
    Customers.find({}, function(err, customers) {
      // console.log("customers from backend controller:",customers);
      res.json(customers);
    })
  },

  create: function(req, res) {
    // if(req.body === ""){
    //   res.json({status: "Name already taken"});
    // } else {
      Customers.create(req.body, function(err, customers){
        res.json(customers);
      })
    // }
  },

  remove: function(req, res) {
    // console.log("back end controller req.params.id:",req.params.id);
    Customers.remove({_id: req.params.id}, function(err, customers){
      res.json(customers);
    })
  }
  
}