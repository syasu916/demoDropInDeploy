/*
* Uses an async/await  and fetch api to GET the paymentMethods. 
* @param url : backend route to adyens '/paymentMethod'
* @param Data : json body capture available payment Methods
*/
async function getPaymentMethodsAsync(url = '', data = {}) {
  var httpVerb = 'POST';
  let response = await fetch(url, {
    method: httpVerb,
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    body: JSON.stringify(data)
    })
  let payload = await response.json();
  let paymentMethodsResponse = payload.data
  console.log("paymentMethodsResponse:",paymentMethodsResponse)
  if (response.ok) return paymentMethodsResponse
  throw new Error(response.status)
};

/*
* Uses an async/await  and fetch api to GET the the Client key
* stored in the config.env file.  
*/
async function getClientKey(url = '') {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      }
    })
  let payload = await response.json();
  let getclientKey = payload.data
  console.log("getclientKey:",getclientKey)
  if (response.ok) return getclientKey
  throw new Error(response.status)
}

/*
* Uses an async/await  and fetch api to POST a payment. 
* @param url : backend route to adyens '/payments'
* @param Data : passes the stat.data to the backend
*/
async function initPayment(paymentMethod) {
  let response = await fetch('http://localhost:3002/api/makePayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(paymentMethod)
  })

  let payload = await response.json();
  let paymentResponse = payload.data
  console.log("paymentResponse:",paymentResponse)
  if (response.ok) return paymentResponse
  throw new Error(response.status)
}
/*
* Renders the Modal PopUp on the Top Z axis with payments result
*/
async function showFinalResult(response){
  var response = response;
  // Get the modal
  var modal = document.getElementById("myModal");

  
  const paymentResultMessage = document.getElementById("paymentResultMessage")
  const newContent = document.createTextNode('Your card was '+response.resultCode+'\n'+'\n');
  // add the text node to the newly created div
  paymentResultMessage.appendChild(newContent);
  if (response!='Authorised'){
    const paymentResultRefusalReason = document.getElementById("paymentResultRefusalReason")
    const newContent = document.createTextNode('\n'+'\n'+'Your card was declined for '+response.refusalReason+'.'+'  Please referesh the page to run another Payment.'+'\n'+'\n');
    paymentResultRefusalReason.appendChild(newContent);
  }
  //Show Modal
  modal.style.display = "block";
}