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
  $('#sign-up-modal').on('click', showSignUpModal)
  $('#sign-in-modal').on('click', showSignInModal)
  $('#chng-pw-modal').on('click', showChangePasswordModal)
}

module.exports = {
  addHandlers
}
