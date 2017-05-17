'use strict'

const config = require('../config')
const store = require('../store')

const createOrder = (data) => {
  console.log('order/api.js (createOrder) - data is ', data)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data: data  (Same thing!)
    data
  })
}

module.exports = {
  createOrder
}
