'use strict'

const productApi = require('./api')
const productUi = require('./ui')

const onGetAllProducts = function () {
  event.preventDefault()
  console.log('(products/events.js) onGetAllProducts ran!')

  productApi.indexProducts()
    .then(productUi.getAllProductsSuccess)
    .catch(productUi.getAllProductsFailure)
}

const addProductHandlers = () => {
  $(document).ready(onGetAllProducts)
}

module.exports = {
  addProductHandlers
}
