'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const changePasswordRequested = event => {
  event.preventDefault()
  ui.changePasswordRequest()
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  // $('#sign-in-form').on('submit', onGetLocations)
  $('#change-password-btn').on('click', changePasswordRequested)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
