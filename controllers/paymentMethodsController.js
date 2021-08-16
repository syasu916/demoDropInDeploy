var fetch = require('node-fetch');
// Route Hanlders
exports.productRoot = (req, res) => {
    return res.status(200).json({
         status: "sucess",
         message: "API is running"
     });
 };


 exports.createPaymentMethod = (req, res) => {
  
  var json = req.body
      json["merchantAccount"]= process.env.AYDEN_MERCHANT_ACCOUNT;

  fetch('https://checkout-test.adyen.com/v67/paymentMethods', {
        method: 'POST',
        headers: {
            'x-API-key': process.env.AYDEN_API_KEY,
            'content-type': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
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