'use strict'

const config = require('../config')
const store = require('../store')

// *** NEED to pass data as an argument, for now we are hard coding data below
const createOrder = () => {
  // console.log('order/api.js (createOrder) - data is ', data)
  const data = {
    order: {
      orderDate: '2017-08-09',
      items: [
        {name: 'apple', price: 100, qty: 2}, {name: 'orange', price: 200, qty: 1},
        {name: 'banana', price: 300, qty: 1}
      ],
      total: 600,
      _owner: '591b52a843751e17c229471a'
    }
  }
  console.log('(orders/api.js) data is:', data)
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

const indexOrders = () => {
  console.log('orders/api.js (indexOrders)')

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOrder = (id, data) => {
  console.log('orders/api.js (updateOrder) - ID is: ', id)
  console.log('orders/api.js (updateOrder) - Data is: ', data)

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/orders/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteOrder = () => {
  console.log('orders/api.js (deleteOrder')

  // store.user is stored in scripts/auth/ui.js -> signInSuccess
  return $.ajax({
    url: config.apiOrigin + '/orders/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createOrder,
  indexOrders,
  updateOrder,
  deleteOrder
}
