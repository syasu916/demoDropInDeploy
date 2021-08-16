var fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

exports.makePayment = (req,res) => {


    const json = { "amount":{ "currency":"EUR", "value":1000 },
        "reference": uuidv4(),
        "merchantAccount": process.env.AYDEN_MERCHANT_ACCOUNT,
        "returnUrl": "https://your-company.com/checkout?shopperOrder=12xy.."};
        json["paymentMethod"]=req.body.paymentMethod;
        


    console.log('-------------------------------------------------------');


    fetch('https://checkout-test.adyen.com/v67/payments', {
      method: 'POST',
      headers: {
          'x-API-key': process.env.AYDEN_API_KEY,
          'content-type': 'application/json',
      },
      body: JSON.stringify(json)
  })
  .then((res) => { 
      status = res.status; 
      return res.json() 
    })
    .then((jsonData) => {
      console.log(jsonData);
      console.log(status);
      return res.status(status)
            .json({
              data: jsonData,
            });
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
}