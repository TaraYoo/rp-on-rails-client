'use strict'

const commonUi = require('../common-ui.js')
const store = require('../store.js')
const signUpForm = require('../templates/sign-up-form.handlebars')
const signInForm = require('../templates/sign-in-form.handlebars')
const welcomeTemplate = require('../templates/welcome-page.handlebars')
const authorizedOptions = require('../templates/post-sign-menu.handlebars')
const changePasswordForm = require('../templates/change-password-form.handlebars')

const signUpRequested = () => {
  commonUi.emptyDynamic()

  const signUpFormHtml = signUpForm()

  $('.requested-form').empty()
  $('.requested-form').append(signUpFormHtml)
}

const signInRequested = () => {
  commonUi.emptyDynamic()

  const signUpFormHtml = signInForm()

  $('.requested-form').empty()
  $('.requested-form').append(signUpFormHtml)
}

const signUpSuccess = () => {
  commonUi.emptyDynamic()
  // generate user message
  $('.landing-alerts').text("You're signed up. Please sign in")
  // show user feedback
  $('.landing-alerts').show()
}

const signInSuccess = responseData => {
  commonUi.emptyDynamic()
  // hide landing content
  $('.landing').hide()
  // store user data
  store.user = responseData.user
  // get variables for handlebars
  const name = store.user.email.split('@')[0]
  const locations = store.user.locations
  const bokbulboks = store.user.bokbulboks

  // get the post sign in template
  const welcomeHtml = welcomeTemplate({name: name,
    locations: locations,
    bokbulboks: bokbulboks})

  const authorizedOptionHtml = authorizedOptions()

  $('.welcome-cards').append(welcomeHtml)
  $('.sidenav').append(authorizedOptionHtml)
}

const signOutSuccess = () => {
  commonUi.emptyDynamic()
  // empty non-landing contents
  $('.hide-on-med-and-down').empty()
  $('#nav-mobile').empty()
  $('.welcome-cards').empty()

  // go back to landing page
  $('.landing').show()
  // delete user info in store
  store.user = null
}

const changePasswordRequest = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // Change password template
  const changePasswordHtml = changePasswordForm()
  // Show the change password form
  $('.authorized-form').empty()
  $('.authorized-form').append(changePasswordHtml)
}

const changePasswordSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // Show post-sign-in menus
  $('.authorized-form').text('You changed passwords!')

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)
}

const signUpFailure = responseData => {
  commonUi.emptyDynamic()

  console.log(responseData.state())
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
  signUpRequested,
  signInRequested,
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
