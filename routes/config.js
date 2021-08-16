const express = require('express');

const configController = require('./../controllers/configController');

const router = express.Router();

router
  .route('/')
  .get(configController.getClientKey);
//  .get(productController.getAllProducts);


module.exports = router;