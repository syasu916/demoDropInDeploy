//Data for 
var defaultPaymentMethod={"countryCode": "NL", 
            "amount": { "currency": "EUR", "value": 1000 }, 
            "channel": "Web", "shopperLocale": "nl-NL" 
           }

/*
* async function to create the configuration Object 
* 
*/
async function getConfig() {
  //call paymentMethods to get the api response from '/paymentMethods'
  const paymentMethodsResponse = await getPaymentMethodsAsync('api/paymentMethods', defaultPaymentMethod);
  //GET the AYDEN_CLIENT_KEY from the config.env file 
  const clientKey = await getClientKey('api/config');
 
  var configuration =  {
    paymentMethodsResponse: paymentMethodsResponse,// The `/paymentMethods` response from the server.
    clientKey: clientKey, // Web Drop-in versions before 3.10.1 use originKey instead of clientKey.
    locale: "en-US",
    environment: "test",
    paymentMethodsConfiguration: {
      card: {
        showPayButton: true,
        hasHolderName: true,
        holderNameRequired: true,
        name: "Credit or debit card",
        amount: {
          value: 1000,
          currency: "EUR"
        }
      }
    },
    onSubmit: (state, dropin) => {
      // Global configuration for onSubmit
      // Your function calling your server to make the `/payments` request
      if (state.isValid == false){
        return console.error();
      }else{
          console.log("state",state)
          initPayment(state.data)
          .then(response => {
            if (response.action) {
              // Drop-in handles the action object from the /payments response
              dropin.handleAction(response.action);
            } else {
              //Final Result to the Customer with Modal Popup
              showFinalResult(response);
            }
          })
          .catch(error => {
            throw Error(error);
          });
      }
    },
  }
  return configuration;
}

/*
* Creates an instance of AdyenCheckout to render the <div id="dropin-container"></div>
*/
async function initCheckout() {
  console.log('-------checkoutINIT------')
  try {
    const checkout = new AdyenCheckout(await getConfig().then((configuration) => {
      console.log(configuration)
      return configuration}
    ));

    checkout.create("dropin",{
      // Starting from version 4.0.0, Drop-in configuration only accepts props related to itself and cannot contain generic configuration like the onSubmit event.
          openFirstPaymentMethod:true,
          showStoredPaymentMethods: true,
          showPayButton: true
      }).mount( document.querySelector("#dropin-container"));
  } catch (error) {
    console.log(error)
  }
}





