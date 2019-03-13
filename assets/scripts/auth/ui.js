'use strict'

const commonUi = require('../common-ui.js')
const store = require('../store.js')
const signUpForm = require('../templates/sign-up-form.handlebars')
const signInForm = require('../templates/sign-in-form.handlebars')
const welcomeTemplate = require('../templates/welcome-page.handlebars')
const authorizedOptions = require('../templates/post-sign-menu.handlebars')

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
  $('.hide-on-med-and-down').append(authorizedOptionHtml)
  $('#nav-mobile').append(authorizedOptionHtml)

  // (4) [{…}, {…}, {…}, {…}]
  // 0: {id: 4, description: "a snowfall", created_at: "2019-03-12T22:42:41.977Z", updated_at: "2019-03-12T22:42:41.977Z", used: false, …}
  // 1: {id: 5, description: "book of many things", created_at: "2019-03-12T22:42:53.828Z", updated_at: "2019-03-12T22:42:53.828Z", used: false, …}
  // 2: {id: 6, description: "fluffy bunny", created_at: "2019-03-12T22:43:04.173Z", updated_at: "2019-03-12T22:43:04.173Z", used: false, …}
  // 3: {id: 7, description: "demon king", created_at: "2019-03-12T22:43:13.984Z", updated_at: "2019-03-12T22:43:13.984Z", used: false, …}
  // length: 4
  // __proto__: Array(0)
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
