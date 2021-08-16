const express = require('express');
const morgan = require('morgan');
const app = express()


//1) Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//importing routes

const paymentMethods = require('./routes/paymentMethods');
const config = require('./routes/config');
const makePayment = require('./routes/makePayment');


app.use('/api/paymentMethods',paymentMethods);
app.use('/api/config',config);
app.use('/api/makePayment',makePayment);



module.exports = app;