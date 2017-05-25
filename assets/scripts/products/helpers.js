'use strict'
const store = require('../store')

const hideAlerts = () => {
  $('#alert-id').hide()
}

const showAlert = function (message) {
  hideAlerts()

  message.slideDown().delay(500).slideUp()
}

const removeFromCart = function () {
  $('.remove-from-cart').off()
  $('.remove-from-cart').on('click', function (event) {
    console.log('removing from cart')
    console.log($(event.target))
    const index = $('.cartProductWrapper').index($(event.target).parent())
    console.log(index)
    store.cart.products.splice(index, 1)
    $(event.target).parent().remove()
    console.log($('.cartProductWrapper').length)
    if ($('.cartProductWrapper').length === 0) {
      $('#checkoutBtn').hide()
    }
  })
}

module.exports = {
  showAlert,
  removeFromCart
}
