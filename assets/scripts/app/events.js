const openCart = function (event) {
  $('#mySidenav').width('300px')
}

const closeCart = function (event) {
  $('#mySidenav').width('0px')
}

const uploadOrder = function (event) {
  console.log('stripe checkout button clicked')
}
const addHandlers = () => {
  $('#open-shopping-cart').on('click', openCart)
  $('#close-shopping-cart').on('click', closeCart)
  $('#stripeCheckout').on('click', uploadOrder)
}

module.exports = {
  addHandlers
}
