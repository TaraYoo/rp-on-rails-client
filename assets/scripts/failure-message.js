'use strict'

const failureMessage = message => {
  $('.failure-message').empty()
  $('.failure-message').text(message)

  setTimeout(() => {
    $('.failure-message').empty()
  }, 3000)
}

const edgeStatuses = {
  400: function () { failureMessage('Please modify your url and try again') },
  401: function () { failureMessage('This is unauthorized.') },
  403: function () { failureMessage('You don\'t have access to this part.') },
  404: function () { failureMessage('This item does not exist. Please try different one') },
  405: function () { failureMessage('You don\'t have access to this command.') },
  406: function () { failureMessage('Please request only JSON data.') },
  412: function () { failureMessage('Please check your requirements.') },
  415: function () { failureMessage('This file type isn\'t supported.') },
  500: function () { failureMessage('There is an issue with the server. Please try again') },
  501: function () { failureMessage('This function does not exist yet.') }
}

module.exports = {
  failureMessage,
  edgeStatuses
}
