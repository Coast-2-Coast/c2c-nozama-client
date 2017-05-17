'use strict'

const orderApi = require('./api')
const orderUi = require('./ui')

const onCreateOrder = function (event) {
  event.preventDefault()

  console.log('(order/events.js) onCreateOrder ran!')

  // Need to get FILLED IN order object so that it can be passed to orderApi
  //  that will do a CREATE (POST) of that order to the database

  console.log('(order/events.js) onCreateOrder - Order is: ', order)

  // const orderId = $(this).data('id')
  // console.log('orderId is:', orderId)

  orderApi.createOrder(order)
    .then(orderUi.onCreateOrderSuccess)
    .catch(orderUi.onCreateOrderFailure)
}

const addOrderHandlers = () => {
  // *** NEEDS TO BE MOVED ***
  // This click event handler will be triggered on a successful STRIPE order
  //  authorization.

  // Listen for click event on the 'Create Order' button in the cart
  // use button id or class?
  // $(document).on('click', '.checkoutBtn', onCreateOrder)
}

module.exports = {
  addOrderHandlers
}
