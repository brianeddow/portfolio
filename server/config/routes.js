var express = require('express');
var app = express(); 
var Customers = require('../controllers/customers.js');
var Products = require('../controllers/products.js');
var Orders = require('../controllers/orders.js');

module.exports = function(app) {

  app.get('/customers', function(req, res){
    Customers.show(req, res)
  })

  app.post('/new', function(req, res){
    Customers.create(req, res)
  })

  app.delete('/remove/:id', function(req, res){
    Customers.remove(req, res)
  })

  // app.get('/:name', function(req, res){
  //   Customers.show_one(req, res)
  // })

  // ++++++++++++++++++++++++++++++++++++

  app.get('/products', function(req, res){
    Products.show(req, res)
  })

  app.post('/newProduct', function(req, res){
    Products.create(req, res)
  })

  app.delete('/removeProduct/:id', function(req, res){
    Products.remove(req, res)
  })

  // app.get('/:name', function(req, res){
  //   Customers.show_one(req, res)
  // })

//  +++++++++++++++++++++++++++++++++++++

  app.get('/orders', function(req, res){
    Orders.show(req, res)
  })

  app.post('/newOrder', function(req, res){
    Orders.create(req, res)
  })

  app.delete('/removeOrder/:id', function(req, res){
    Orders.remove(req, res)
  })

  // app.get('/:name', function(req, res){
  //   Customers.show_one(req, res)
  // })

}