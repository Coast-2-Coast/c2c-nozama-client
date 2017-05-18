'use strict'
const store = require('../store')

const createOrderSuccess = function (ajaxResponse) {
  console.log('(order/ui.js) createOrderSuccess ran!  Data is :', ajaxResponse)

  const order = ajaxResponse
  store.order = order

// to be revised

  // stripe.onCreateCharge(store.order)
  //   .then(stripeUi.onCreateChargeSuccess)
  //   .catch(stripeUi.onCreateChargeFailure)

  // TBD - Tell user that order was successful
}

const createOrderFailure = (error) => {
  console.log('(order/ui.js) createOrderFailure  Error is :', error)
  console.error(error)

// to be revised
  // .then((data) => {
  //   onShowOrder();
  //   stripe.onCreateCharge(event, data.order);
  // })
  // .catch(ui.failure);
}

const indexOrdersSuccess = function (ajaxResponse) {
  console.log('(orders/ui.js) indexOrdersSuccess ran!  Data is :', ajaxResponse)

  // const order = ajaxResponse
  // store.order = order

  // *** TBD *** - Show user list of all orders using handlebars
}

const indexOrdersFailure = (error) => {
  console.log('(orders/ui.js) indexOrdersFailure  Error is :', error)
  console.error(error)
}

const updateOrderRatingSuccess = function (ajaxResponse) {
  console.log('(orders/ui.js) updateOrderRatingSuccess ran!  Data is :', ajaxResponse)

  // const order = ajaxResponse
  // store.order = order

  // *** TBD *** - Show updated order rating to user
}

const updateOrderRatingFailure = (error) => {
  console.log('(orders/ui.js) updateOrderRatingFailure  Error is :', error)
  console.error(error)
}

const deleteOrderSuccess = function () {
  console.log('(orders/ui.js) deleteOrderSuccess ran!')

  // *** TBD *** - Remove order from Display All Orders display
}

const deleteOrderFailure = (error) => {
  console.log('(orders/ui.js) deleteOrderFailure  Error is :', error)
  console.error(error)
}

module.exports = {
  createOrderSuccess,
  createOrderFailure,
  indexOrdersSuccess,
  indexOrdersFailure,
  updateOrderRatingSuccess,
  updateOrderRatingFailure,
  deleteOrderSuccess,
  deleteOrderFailure
}
