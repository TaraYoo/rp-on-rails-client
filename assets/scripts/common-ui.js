'use strict'

const store = require('./store.js')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.landing-alerts').text('')
}

const getLocationsSuccess = responseData => {
  console.log(responseData)
}

const getLocationsFailure = () => {
  console.log('failure')
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getLocationsFailure
}
