const openCart = function (event) {
  $('#mySidenav').width('300px')
}

const closeCart = function (event) {
  $('#mySidenav').width('0px')
}

const addHandlers = () => {
  $('#open-shopping-cart').on('click', openCart)
  $('#close-shopping-cart').on('click', closeCart)
}

module.exports = {
  addHandlers
}
