'use strict'

const config = require('../config')
const store = require('../store')

const stripeCharge = function (data) {
  // const id = data.id
  console.log('token is ', data)
  return $.ajax({
    url: config.apiOrigin + '/charges/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  stripeCharge
}
