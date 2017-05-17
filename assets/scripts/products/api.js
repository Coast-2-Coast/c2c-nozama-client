'use strict'

const config = require('../config')

const indexProducts = function () {
  console.log('products/api.js (indexProducts) Ran!')

  return $.ajax({
    url: config.apiOrigin + '/products/',
    method: 'GET'
  })
}

module.exports = {
  indexProducts
}
