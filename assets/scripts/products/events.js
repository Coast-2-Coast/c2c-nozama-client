'use strict'

const productApi = require('./api')
const productUi = require('./ui')

const onGetAllProducts = function () {
  console.log('(products/events.js) onGetAllProducts ran!')

  productApi.indexProducts()
    .then(productUi.getAllProductsSuccess)
    .catch(productUi.getAllProductsFailure)
}

const addProductHandlers = () => {
  $(document).ready(onGetAllProducts)
  // listen for click events on the 'add to cart' button for each product
  // use button id or class?
  $(document).on('click', '.addToCartBtn', function () {
    console.log('add to cart btn clicked.')
  })
}

module.exports = {
  addProductHandlers
}
