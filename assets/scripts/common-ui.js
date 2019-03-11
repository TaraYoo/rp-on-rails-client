'use strict'

const store = require('./store.js')

const emptyDynamic = () => {
  $('form').trigger('reset')
}

module.exports = {
  emptyDynamic
}
