'use strict'

const showLocationsTemplate = require('../templates/location-cards.handlebars')

const testHandlebars = () => {
  $('.content').text(showLocationsTemplate)
}

module.exports = {
  testHandlebars
}
