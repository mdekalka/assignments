const express = require('express');
const router = express.Router();
const params = require('params');

const shopCart = require('../services/todoService')
const { validateProduct } = require('../utils/validations')


router.get('/', function(req, res) {
  res.json({ data: shopCart.productList })
})

router.post('/', function(req, res, next) {
  const product = params(req.body).only('id', 'productName', 'price', 'quantity', 'icon');

  // shopCart.addProduct(product)

  res.json({ message: 'Product was added successfully.'})
})

router.delete('/:id', function(req, res) {

})

module.exports = router;