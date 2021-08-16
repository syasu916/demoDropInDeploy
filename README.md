# demoDropInDeploy

Creates a basic Checkout page for the user to enter their payment information using the Adyen Web Dropin. 

## Description
This project uses NodeJS to perform the backend server calls to Adyens Payments platform. The front end is a very basic HTML page that renders Adyens Dropin using a <script> tag  

## Getting Started
Before getting started,please refer to [Adyen Drop in Solution](https://docs.adyen.com/online-payments/drop-in-web).
  


### Requirements
NodeJS version 10

### Dependencies

Node Dependencies located in the [package.json](https://github.com/syasu916/demoDropInDeploy/blob/main/package.json)
* dotenv
* express
* morgan
* node-fetch
* uuid

### Installing
1) Edit the [config.env](https://github.com/syasu916/demoDropInDeploy/blob/main/config.env) with you [Adyen API Credentials](https://docs.adyen.com/development-resources/api-credentials#new-credential)
  * AYDEN_API_KEY="YOUR_API_KEY"
  * AYDEN_MERCHANT_ACCOUNT="MERCHANT_ACCOUNT"
  * AYDEN_CLIENT_KEY="CLIENT_KEY"
  
```
npm install
````
### Executing program
To run the program call npm start. 
```
npm start
```
Once your server has started, http://localhost:3000/
```
> node server.js
Server running on Port 3000
```
If your page does not load, please check the server log. If the error message appears update the [config.env](https://github.com/syasu916/demoDropInDeploy/blob/main/config.env) with you [Adyen API Credentials](https://docs.adyen.com/development-resources/api-credentials#new-credential)
```
  { status: 401,
  errorCode: '000',
  message: 'HTTP Status Response - Unauthorized',
  errorType: 'security' }
```
## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the [Scott Y] License - see the LICENSE.md file for deta
