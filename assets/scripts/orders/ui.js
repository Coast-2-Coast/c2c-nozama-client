'use strict'
const store = require('../store')

const onCreateOrderSuccess = function (ajaxResponse) {
  console.log('(order/ui.js) onCreateOrderSuccess ran!  Data is :', ajaxResponse)

  const order = ajaxResponse
  store.order = order

  // TBD - Tell user that order was successful
}

const onCreateOrderFailure = (error) => {
  console.log('(order/ui.js) onCreateOrderFailure  Error is :', error)
  console.error(error)
}

module.exports = {
  onCreateOrderSuccess,
  onCreateOrderFailure
}
