'use strict'

const config = require('../config')
const store = require('../store')

const stripeCharge = function (data) {
  const id = data.id
  console.log('data.id is ', id)
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    id
  })
}

module.exports = {
  stripeCharge
}
