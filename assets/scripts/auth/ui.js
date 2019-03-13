'use strict'

const commonUi = require('../common-ui.js')
const store = require('../store.js')
const locationApi = require('../locations/api.js')

const signUpSuccess = () => {
  commonUi.emptyDynamic()
  // hide unrelated content
  $('#change-password-form').hide()
  $('#create-location-form').hide()
  $('.location-cards').hide()
  // generate user message
  $('.landing-alerts').text("You're signed up. Please sign in")
  // show user feedback
  $('.landing-alerts').show()
}

const signInSuccess = responseData => {
  commonUi.emptyDynamic()
  // get locations data

  // hide unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()

  // show after-auth page
  $('.location-cards').show()
  $('.after-sign-in-options').show()
  // store user data
  store.user = responseData.user
  locationApi.getLocations(responseData)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  console.log(store.user)
}

const signOutSuccess = () => {
  commonUi.emptyDynamic()
  // hide unrelated content
  $('#change-password-form').hide()
  $('#create-location-form').hide()
  $('.location-cards').hide()
  $('.after-sign-in-options').hide()
  // generate user message
  // show user feedback
  $('.landing-forms').show()
  // delete user info in store
  store.user = null
}

const changePasswordRequest = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.location-cards').hide()
  $('.landing-forms').hide()
  $('#create-location-form').hide()

  // Show the change password form
  $('#change-password-form').show()

  // Show post-sign-in menus
  $('.post-sign-in').show()
}

const changePasswordSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.location-cards').hide()
  $('.landing-forms').hide()
  $('#create-location-form').hide()

  // Show related user feedback
  $('.user-alert').show()

  // Show post-sign-in menus
  $('.user-alert').text('You changed passwords!')
}

const signUpFailure = () => {
  commonUi.emptyDynamic()
  // hide unrelated content
  $('.after-sign-in-forms').hide()
  $('.location-cards').hide()
  // generate user message
  $('.landing-alerts').text('There was a sign-up error. Please try again')
  // show user feedback
  $('.landing-alerst').show()
}

const signInFailure = () => {
  commonUi.emptyDynamic()
  // hide unrelated content
  $('.after-sign-in-forms').hide()
  $('.location-cards').hide()
  // generate user message
  $('.landing-alerts').text('There was a sign-in error. Please try again')
  // show user feedback
  $('.landing-alerts').show()
}

const changePasswordFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.location-cards').hide()
  $('.landing-forms').hide()
  $('#create-location-form').hide()

  // Show related user feedback
  $('.user-alert').show()

  // Show post-sign-in menus
  $('.user-alert').text("Your password didn't change. Please try again")
}

const signOutFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.location-cards').hide()
  $('.landing-forms').hide()
  $('#create-location-form').hide()

  // Show related user feedback
  $('.user-alert').show()

  // Show post-sign-in menus
  $('.user-alert').text("Your password didn't change. Please try again")
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
