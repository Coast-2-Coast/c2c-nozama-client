'use strict'
const store = require('../store')

const getAllProductsSuccess = function (ajaxResponse) {
  console.log('(products/ui.js) getAllProductsSuccess ran!  Data is :', ajaxResponse)

  const products = ajaxResponse
  store.products = products

  $('#products').html('')
  const displayAllProducts = require('../templates/product-listing-before-login.handlebars')
  $('#products').prepend(displayAllProducts(products))
}

const getAllProductsFailure = (error) => {
  console.log('(products/ui.js) getAllProductsSuccess  Error is :', error)
  console.error(error)
}

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure
}
