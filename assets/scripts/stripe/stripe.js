// const stripe = require('stripe')
const orderEvents = require('../orders/events.js')
const chargeApi = require('../charge/api.js')
const store = require('../store')

const onPageLoad = function () {
// StripeCheckout has a linter error but works because we have the stripe
// library referenced in the index.html, making it accessible to the entire repo
  const handler = StripeCheckout.configure({
    key: 'pk_test_1uSrps2fqlCACMqKQyrfBwbr',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function (token) {
      console.log('token is:', token)
      orderEvents.onCreateOrder()
      chargeApi.stripeCharge(token)
// invoke onCreateOrder
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
    }
  })

  document.getElementById('checkoutBtn').addEventListener('click', function (e) {
    // Open Checkout with further options:
    console.log('Inside of checkout btn handler')
    console.log('store.cart is', store.cart)

    let total = 0
    for (let i = 0; i < store.cart.products.length; i++) {
      const price = store.cart.products[i].price
      total = total + price
    }
    handler.open({
      name: 'Nozama',
      description: 'Enter payment information',
      amount: total * 100,
      allowRememberMe: false
    })
    e.preventDefault()
  })

// Close Checkout on page navigation:
  window.addEventListener('popstate', function () {
    handler.close()
  })
}

module.exports = {
  onPageLoad
}
