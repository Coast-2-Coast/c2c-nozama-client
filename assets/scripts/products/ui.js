'use strict'
const store = require('../store')
// temporarily calling buildOrder from this file to
// see console logs.
const buildOrder = require('../orders/buildOrder.js')

const getAllProductsSuccess = function (ajaxResponse) {
  console.log('(products/ui.js) getAllProductsSuccess ran!  Data is :', ajaxResponse)

  const products = ajaxResponse
  store.products = products
  console.log(products)

  $('#products').html('')
  const displayAllProducts = require('../templates/product-listing-before-login.handlebars')
  $('#products').prepend(displayAllProducts(products))
}

const getAllProductsFailure = (error) => {
  console.log('(products/ui.js) getAllProductsSuccess  Error is :', error)
  console.error(error)
}

const getOneProductSuccess = function (ajaxResponse) {
  // console.log('(products/ui.js) getOneProductSuccess ran!  Data is :', ajaxResponse)
  // every time a user adds to the cart, a show action brings
  // back a product object, we we add to the store.cart array
  // start.cart is initialized as an empty array up on sign in success
  store.cart.products.unshift(ajaxResponse.product)
  const products = store.cart
  // console.log(products)

  $('#cartHandlebar').html('')
  const displayAllProducts = require('../templates/product-cart-listing.handlebars')
  $('#cartHandlebar').prepend(displayAllProducts(products))
  // const displayOneProduct = require('../templates/cart-listing.handlebars')
  // $('#cartHandlebar').prepend(displayOneProduct(product))
  console.log(buildOrder.order())
}

const getOneProductFailure = (error) => {
  console.log('(products/ui.js) getOneProductSuccess  Error is :', error)
  console.error(error)
}

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getOneProductSuccess,
  getOneProductFailure
}
