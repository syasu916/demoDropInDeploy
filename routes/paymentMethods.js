const express = require('express');

const paymentMethodsController = require('./../controllers/paymentMethodsController');

const router = express.Router();

router
  .route('/')
  .post(paymentMethodsController.createPaymentMethod);
//  .get(productController.getAllProducts);


module.exports = router;