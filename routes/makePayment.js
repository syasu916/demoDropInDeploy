const express = require('express');

const makePaymentController = require('./../controllers/makePaymentController');

const router = express.Router();

router
  .route('/')
  .post(makePaymentController.makePayment);
//  .get(productController.getAllProducts);


module.exports = router;