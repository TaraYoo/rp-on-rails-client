'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const api = require('./api.js')
const commonUi = require('../common-ui.js')
const store = require('../store.js')
const failures = require('../failure-message.js')

const onSignUpRequested = event => {
  event.preventDefault()
  ui.signUpRequested()
}

const onSignInRequested = event => {
  event.preventDefault()
  ui.signInRequested()
}

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
    .then(() => {
      if (store.user.email === 'demo@demo.com') {
        api.demoSignOut()
        api.demoSignIn()
      }
    })
    .then(() => {
      commonUi.getLocationsSuccess(store.user)
    })
    .catch(commonUi.emptyDynamic)
}

const changePasswordRequested = event => {
  event.preventDefault()
  ui.changePasswordRequest()
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  if (store.user.email === 'demo@demo.com') {
    failures.failureMessage('This is a demo account. You do not have access to this function.')
  } else {
    api.changePassword(formData)
      .then(ui.changePasswordSuccess)
      .catch(commonUi.emptyDynamic)
  }
}

const onSignOut = event => {
  event.preventDefault()

  if (store.user.email === 'demo@demo.com') {
    api.demoSignOut()
      .then(ui.demoSignOut)
      .catch(commonUi.emptyDynamic)
  } else {
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(commonUi.emptyDynamic)
  }
}

const addHandlers = () => {
  $('.request-sign-up-btn').on('click', onSignUpRequested)
  $('.request-sign-in-btn').on('click', onSignInRequested)
  $('.requested-form').on('submit', '#sign-up-form', onSignUp)
  $('.requested-form').on('submit', '#sign-in-form', onSignIn)
  $('.sidenav').on('click', '#change-password-btn', changePasswordRequested)
  $('main').on('submit', '#change-password-form', onChangePassword)
  $('.sidenav').on('click', '#sign-out-button', onSignOut)
}

module.exports = {
  addHandlers
}
