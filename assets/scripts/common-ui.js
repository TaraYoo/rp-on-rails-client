'use strict'

const store = require('./store.js')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.landing-alerts').text('')
}

module.exports = {
  emptyDynamic
}
