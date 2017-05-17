'use strict'

const app = require('../app.js')

const indexProducts = function () {
  console.log('products/api.js (indexProducts) Ran!')

  return $.ajax({
    url: app.host + '/products/',
    method: 'GET'
  })
}

module.exports = {
  indexProducts
}
