'use strict'

const commonUi = require('../common-ui.js')
const store = require('../store.js')
const signUpForm = require('../templates/sign-up-form.handlebars')
const signInForm = require('../templates/sign-in-form.handlebars')
const welcomeTemplate = require('../templates/welcome-page.handlebars')
const authorizedOptions = require('../templates/post-sign-menu.handlebars')
const changePasswordForm = require('../templates/change-password-form.handlebars')
const api = require('./api.js')

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

  // delete all locations and bokbulboks for demo
  if (store.user.email === 'demo@demo.com') {
    api.demoSignOut()
      .then(() => console.log('data wiped'))
  }

  // get the post sign in template
  const welcomeHtml = welcomeTemplate({name: name,
    locations: locations,
    bokbulboks: bokbulboks})

  const authorizedOptionHtml = authorizedOptions()

  $('.welcome-cards').html(welcomeHtml)
  $('.sidenav').html(authorizedOptionHtml)
}

const signOutSuccess = () => {
  commonUi.emptyDynamic()
  // empty non-landing contents
  $('.sidenav').empty()
  $('.welcome-cards').empty()
  $('.authorized-form').empty()
  $('.bokbulbok').empty()

  // go back to landing page
  $('.landing').show()
  // delete user info in store
  store.user = null
}

const demoSignOut = () => {
  commonUi.emptyDynamic()
  // empty non-landing contents
  $('.sidenav').empty()
  $('.welcome-cards').empty()
  $('.authorized-form').empty()
  $('.bokbulbok').empty()

  // go back to landing page
  $('.landing').show()
  // delete user info in store
  api.signOut()
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
  // empty all dynamic content
  commonUi.emptyDynamic()

  const response = responseData.responseJSON
  const header = Object.keys(response)[0]
  const details = response[`${Object.keys(response)[0]}`][0]
  const message = header + ' ' + details
  let toAppend

  if (message === ' ') {
    toAppend = 'Something went wrong. Please try again'
  } else {
    toAppend = message
  }

  $('.failure-message').empty()
  $('.failure-message').text(toAppend)

  setTimeout(() => {
    $('.failure-message').empty()
  }, 3000)
}

module.exports = {
  signUpRequested,
  signInRequested,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordRequest,
  changePasswordSuccess,
  signOutSuccess,
  demoSignOut
}
