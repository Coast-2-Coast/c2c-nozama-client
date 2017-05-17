'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('(auth/events.js) Sign-up ran!')

  const data = getFormFields(event.target)
  console.log('auth/event.js (onSignUp) Data: ', data)

  // CHECK FOR USER ENTERED PASSWORD MISMATCH in SIGN-UP modal
  if (data.credentials.password === data.credentials.password_confirmation) {
    // User entered the same passwords, try to sign up user
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    // // User did not enter the same passwords.  Ask user to re-enter passwords.
    // const errorTextUponPasswordMismatchFailure = 'Passwords do not match.  Please verify passwords match.'
    //
    // // Display error text in SIGN UP modal footer back to user to correct
    // //  incorrect password.
    // $('#sign-up-footer').html(errorTextUponPasswordMismatchFailure)
    //
    // // If user closes out of SIGN UP modal, clear error text message in SIGN
    // //  UP modal and reset modal body text.
    // $('#close-sign-up-modal').on('click', function () {
    //   $('#sign-up-footer').html(' ')
    //   $('#sign-up').trigger('reset')
    // })
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('(auth/events.js) Sign-in ran!')

  const data = getFormFields(event.target)
  console.log('auth/event.js (onSignIn) Data: ', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('(auth/events.js) Change Password ran!')

  const data = getFormFields(event.target)
  console.log('auth/event.js (onChangePassword) Data: ', data)

  api.changePassword(data)
     .then(ui.changePasswordSuccess)
     .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('(auth/events.js) Sign-out ran!')

  // Don't need to use data object here!
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const showSignUpModal = function (event) {
  console.log('this should toggle sign-up modal')
  $('#mySignUpModal').modal('toggle')
}

const showSignInModal = function (event) {
  $('#mySignInModal').modal('toggle')
}

const showChangePasswordModal = function (event) {
  $('#myPwChangeModal').modal('toggle')
}

const addHandlers = () => {
  // Set up modal click event handlers
  $('#sign-up-modal').on('click', showSignUpModal)
  $('#sign-in-modal').on('click', showSignInModal)
  $('#chng-pw-modal').on('click', showChangePasswordModal)

  // Set up user sign-out click event handler
  $('#sign-out-modal').on('click', onSignOut)

  // Set up user submit event handlers
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
