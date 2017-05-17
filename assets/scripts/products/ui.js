'use strict'

const getAllProductsSuccess = function (ajaxResponse) {
  console.log('(products/ui.js) getAllProductsSuccess ran!  Data is :', ajaxResponse)

  const products = ajaxResponse

  $('#products').html('')
  const displayAllProducts = require('../templates/product-listing.handlebars')
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
