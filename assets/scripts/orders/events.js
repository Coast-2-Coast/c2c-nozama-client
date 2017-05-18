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

  // Don't need to use data object here!
  orderApi.indexOrders()
    .then(orderUi.indexOrdersSuccess)
    .catch(orderUi.indexOrdersFailure)
}

const onUpdateOrderRating = function (event, id) {
  event.preventDefault()
  console.log('player/events.js (onUpdateOrder)')
  console.log('player/events.js (onUpdateOrder) - ID is: ', id)

  // Get updated order rating from getFormFields user input form
  const rating = getFormFields(event.target)
  console.log('player/events.js (onUpdateOrder) - Rating is: ', rating)

  orderApi.updateOrderRating(id, rating)
    .then(orderUi.updateOrderRatingSuccess)
    .catch(orderUi.updateOrderRatingFailure)
}

const onDeleteOrder = function (data) {
  event.preventDefault()
  console.log('player/events.js (onDeleteOrder) - (data is ', data)

  orderApi.deleteOrder(data)
    .then(orderUi.deleteOrderSuccess)
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
  $('#view-orders-btn').on('click', onIndexOrders)

  // Set up submit event handler to View Order History
  // **
  // ** TBD *** Need to fix trigger to onUpdateOrderRating FORM submit event
  // **
  $('#update-order-rating-form').on('submit', onUpdateOrderRating)

  // Set up click event handler to View Order History
  // **
  // ** TBD *** Need to fix trigger to onDeleteOrder click event
  // **
  $('#delete-order-btn').on('click', onDeleteOrder)
}

module.exports = {
  addOrderHandlers,
  onCreateOrder
}
