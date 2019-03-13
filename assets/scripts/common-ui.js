'use strict'

const welcomeCardsTemplate = require('./templates/welcome-page.handlebars')
const store = require('./store.js')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.landing-alerts').text('')
  $('.location-alerts').text('')
  $('.forms-to-show').empty()
  $('.location-cards').empty()
}

const getLocationsSuccess = responseData => {
  const locationCardsHtml = welcomeCardsTemplate({ locations: responseData.locations })
  $('.welcome-cards').empty()
  $('.welcome-cards').append(locationCardsHtml)
  // update store.user.locations per each pull
  store.user.locations = responseData
}

const getLocationsFailure = () => {
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getLocationsFailure
}
