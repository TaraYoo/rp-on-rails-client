'use strict'

const config = require('../config.js')
const store = require('../store.js')
const failures = require('../failure-message.js')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData,
    success: data => {
      const userData = data
      return userData
    },
    statusCode: Object.assign(failures.edgeStatuses, {
      401: function () { failures.failureMessage('Please check your email or password and try again.') }
    })
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    statusCode: Object.assign(failures.edgeStatuses, {
      400: function () { failures.failureMessage('Please check your password and try again.') }
    })
  })
}

const signOut = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
