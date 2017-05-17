'use strict'

const productApi = require('./api')
const productUi = require('./ui')

const onGetAllProducts = function () {
  console.log('(products/events.js) onGetAllProducts ran!')

  productApi.indexProducts()
    .then(productUi.getAllProductsSuccess)
    .catch(productUi.getAllProductsFailure)
}

// const onAddToCart = function (event) {
//   console.log('add to cart btn clicked.')
//   const productId = $(this).data('id')
//   console.log('productId is:', productId)
//   // $('#cartHandlebar').html('')
//   const addItem = require('../templates/cart-listing.handlebars')
//   // need to get product info from show() using productId
//   $('#cartHandlebar').prepend(addItem(product))
// }

const onGetOneProduct = function (data) {
  console.log('(products/events.js) onGetOneProduct ran!')
  const productId = $(this).data('id')
  console.log('productId is:', productId)
  productApi.showProduct(productId)
    .then(productUi.getOneProductSuccess)
    .catch(productUi.getOneProductFailure)
}

const addProductHandlers = () => {
  $(document).ready(onGetAllProducts)
  // listen for click events on the 'add to cart' button for each product
  // use button id or class?
  $(document).on('click', '.addToCartBtn', onGetOneProduct)
}

module.exports = {
  addProductHandlers
}
