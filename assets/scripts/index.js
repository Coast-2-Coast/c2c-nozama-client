'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const productEvents = require('./products/events.js')
const orderEvents = require('./orders/events.js')
const appEvents = require('./app/events.js')
const authEvents = require('./auth/events.js')
const stripeEvents = require('./stripe/stripe.js')

const orderUi = require('./orders/ui.js')

$(() => {
  setAPIOrigin(location, config)
  // Upon page load, hides all views except views passed in array to showView
  // View options are 'header-view' 'drawer-view' 'sign-in-view' 'sign-up-view' 'change-password-view'
  // console.log('Page loaded')
  productEvents.addProductHandlers()
  orderEvents.addOrderHandlers()
  appEvents.addHandlers()
  authEvents.addHandlers()
  stripeEvents.onPageLoad()

  // Hide View Order History modal button until user signs in
  orderUi.hideViewOrderHistoryBtn()
})

$(() => {
  $('#sign-up-modal').on('click', function () { $('#tempSignUpError').html('') })
  $('#sign-up-modal').on('click', function () { $('#sign-up').find('input:text, input:password, select, textarea').val('') })

  $('#sign-in-modal').on('click', function () { $('#tempSignInError').html('') })
  $('#sign-in-modal').on('click', function () { $('#sign-in').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').on('click', function () { $('#tempChangePasswordError').html('') })
  $('#chng-pw-modal').on('click', function () { $('#change-password').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
