'use strict'
const store = require('../store')

const errorTextNoCurrentOrders = 'You have no current orders.  Please submit an order!'

const createOrderSuccess = function () {
  console.log('(orders/ui.js) createOrderSuccess ran!')
  // clear cart
  store.cart = null
  // re-render cart
  $('#cartHandlebar').html(' ')
}

const createOrderFailure = (error) => {
  console.log('(orders/ui.js) createOrderFailure  Error is :', error)
  console.error(error)
}

const indexOrdersSuccess = function (ajaxResponse) {
  console.log('(orders/ui.js) indexOrdersSuccess ran!  Data is :', ajaxResponse)

  const orders = ajaxResponse
  store.orders = orders

  console.log('(orders/ui.js) indexOrdersSuccess - Number of orders:', orders.orders.length)

  if (orders.orders.length === 0) {
    console.log('(orders/ui.js) No current orders for current user!')
    // No orders yet for current user - Display to user that there are no current
    //  orders.
    $('#view-order-history-footer').html(errorTextNoCurrentOrders)
  } else {
    console.log('(orders/ui.js) Number of current orders for current user is: ', orders.orders.length)

    // Build handlebars HTML showing a display of all orders for current user
    $('#display-orders').html('')
    const displayAllOrders = require('../templates/display-view-order-history.handlebars')
    $('#display-orders').prepend(displayAllOrders(orders))
  }
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

const deleteOrderSuccess = function (id) {
  event.preventDefault()

  // Remove deleted order from rendering in view order history
  $("div[data-id='" + id + "']").remove()
  console.log('(orders/ui.js) deleteOrderSuccess ran! - ID: ', id)

  // *** TBD *** - Remove order from Display All Orders display
}

const deleteOrderFailure = (error) => {
  console.log('(orders/ui.js) deleteOrderFailure  Error is :', error)
  console.error(error)
}

const showViewOrderHistoryBtn = function () {
  console.log('(orders/ui.js) showViewOrderHistoryBtn ran!')

  // Show View Order History modal button after user signs in.
  $('#select-view-order-history-btn').show()
}

const hideViewOrderHistoryBtn = function () {
  console.log('(orders/ui.js) hideViewOrderHistoryBtn ran!')

  // Hide View Order History modal button initially until user signs in.
  $('#select-view-order-history-btn').hide()
}

module.exports = {
  createOrderSuccess,
  createOrderFailure,
  indexOrdersSuccess,
  indexOrdersFailure,
  updateOrderRatingSuccess,
  updateOrderRatingFailure,
  deleteOrderSuccess,
  deleteOrderFailure,
  showViewOrderHistoryBtn,
  hideViewOrderHistoryBtn
}
