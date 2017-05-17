'use strict'

const config = require('../config')

const indexProducts = function () {
  console.log('products/api.js (indexProducts) Ran!')

  return $.ajax({
    url: config.apiOrigin + '/products/',
    method: 'GET'
  })
}

const showProduct = function (data) {
  console.log('show product ran')

  return $.ajax({
    url: config.apiOrigin + '/products/' + data,
    method: 'GET'
  })
}

module.exports = {
  indexProducts,
  showProduct
}
