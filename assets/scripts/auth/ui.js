'use strict'

const store = require('../store')

const productEvents = require('../products/events.js')

// const errorTextUponSignUpFailure = 'User has already signed up.  Please sign in.'
// const errorTextUponIncorrectPasswordFailure = 'Password is incorrect.  Please type in correct password.'

const signUpSuccess = (ajaxResponse) => {
  console.log('(auth/ui.js) signUpSuccess ran!  Data is :', ajaxResponse)

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  console.log('(auth/ui.js) Sign-up failure! Error is :', error)
  console.error(error)

  // Clear modal body text in SIGN UP modal
  $('#sign-up').trigger('reset')
}

const signInSuccess = (ajaxResponse) => {
  store.cart = { products: [] }
  console.log('(auth/ui.js) signInSuccess ran!  Data is :', ajaxResponse)

  // Store user object
  store.user = ajaxResponse.user
  console.log('ui.js: signInSuccess - store is: ', store)

  const products = store.products

  $('#products').html('')
  const displayAllProducts = require('../templates/product-listing.handlebars')
  $('#products').prepend(displayAllProducts(products))

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')
}

const signInFailure = (error) => {
  console.log('(auth/ui.js) Sign-in failure!  Error is :', error)
  console.error(error)

  // // Display error text in SIGN IN modal footer back to user to correct
  // //  incorrect password
  // $('#sign-in-footer').html(errorTextUponIncorrectPasswordFailure)

  // Clear modal body text in SIGN IN modal
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = (ajaxResponse) => {
  console.log('(auth/ui.js) Password successfully changed')

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  console.log('(auth/ui.js) Change-Password failure!  Error is :', error)
  console.error(error)

  // // Display error text in CHANGE PASSWORD modal footer back to user to correct
  // //  incorrect original password
  // $('#change-password-footer').html(errorTextUponIncorrectPasswordFailure)

  // Clear modal body text in CHANGE PASSWORD modal
  $('#change-password').trigger('reset')
}

const signOutSuccess = () => {
  console.log('(auth/ui.js) signOutSuccess ran!  Nothing was returned')

  // OREO COOKIE!
  console.log('store is: ', store)
  // Clear user
  store.user = null
  console.log('store is: ', store)

  // On sign out, show all products without the `Add to Cart` button for each
  //  product.
  productEvents.onGetAllProducts()
}

const signOutFailure = (error) => {
  console.log('(auth/ui.js) Sign-out failure!  Error is :', error)
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
