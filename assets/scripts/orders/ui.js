'use strict'
const store = require('../store')

const onCreateOrderSuccess = function (ajaxResponse) {
  console.log('(order/ui.js) onCreateOrderSuccess ran!  Data is :', ajaxResponse)

  const order = ajaxResponse
  store.order = order

// to be revised

  // stripe.onCreateCharge(store.order)
  //   .then(stripeUi.onCreateChargeSuccess)
  //   .catch(stripeUi.onCreateChargeFailure)

  // TBD - Tell user that order was successful
}

const onCreateOrderFailure = (error) => {
  console.log('(order/ui.js) onCreateOrderFailure  Error is :', error)
  console.error(error)

// to be revised
  // .then((data) => {
  //   onShowOrder();
  //   stripe.onCreateCharge(event, data.order);
  // })
  // .catch(ui.failure);
}

module.exports = {
  onCreateOrderSuccess,
  onCreateOrderFailure
}
