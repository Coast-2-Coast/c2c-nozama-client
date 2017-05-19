'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const orderApi = require('./api')
const orderUi = require('./ui')

const onCreateOrder = function () {
  // no longer passing an event
  // event.preventDefault()

  console.log('(order/events.js) onCreateOrder ran!')

  // Need to get FILLED IN order object so that it can be passed to orderApi
  //  that will do a CREATE (POST) of that order to the database

  // const orderId = $(this).data('id')
  // console.log('orderId is:', orderId)

  orderApi.createOrder()
    .then(orderUi.createOrderSuccess)
    .catch(orderUi.createOrderFailure)
}

const onIndexOrders = function (event) {
  event.preventDefault()
  console.log('orders/events.js (onIndexOrders) ran!')

  $('#myViewOrderHistoryModal').modal('toggle')

  // Don't need to use data object here!
  orderApi.indexOrders()
    .then(orderUi.indexOrdersSuccess)
    .catch(orderUi.indexOrdersFailure)
}

const onUpdateOrderRating = function (event) {
  event.preventDefault()
  console.log('player/events.js (onUpdateOrder)')

  const orderId = $(this).data('id')

  const rating = document.getElementById('rating').value

  console.log('player/events.js (onUpdateOrderRating) - ID is: ', orderId)
  console.log('player/events.js (onUpdateOrderRating) - Rating is: ', rating)
}

const onDeleteOrder = function (event) {
  event.preventDefault()
  console.log('player/events.js (onDeleteOrder)')

  const orderId = $(this).data('id')
  orderApi.deleteOrder(orderId)
    .then(orderUi.deleteOrderSuccess(orderId))
    .catch(orderUi.deleteOrderFailure)
}

const addOrderHandlers = () => {
  // *** NEEDS TO BE MOVED ***
  // This click event handler will be triggered on a successful STRIPE order
  //  authorization.

  // Listen for click event on the 'Create Order' button in the cart
  // use button id or class?
  // $(document).on('click', '#checkoutBtn', onCreateOrder)

  // **
  // ** TBD *** Need to fix trigger on onCreateOrder click event
  // **

  // Set up click event handler to View Order History
  // **
  // ** TBD *** Need to fix trigger to onIndexOrders click event
  // **

  console.log('orders/events.js (Setting click handler for onIndexOrders)')

  $('#select-view-order-history-btn').on('click', onIndexOrders)

  // Set up click event handler to Set New Rating in View Order History
  $(document).on('click', '.setOrderRatingBtn', onUpdateOrderRating)

  // Set up click event handler to Delete Order in View Order History
  $(document).on('click', '.removeFromOrderHistoryBtn', onDeleteOrder)
}

module.exports = {
  addOrderHandlers,
  onCreateOrder
}
