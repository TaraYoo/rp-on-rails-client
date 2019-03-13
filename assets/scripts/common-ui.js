'use strict'

const locationCardsTemplate = require('./templates/location-cards.handlebars')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.landing-alerts').text('')
  $('.location-alerts').text('')
  $('.forms-to-show').empty()
  $('.location-cards').empty()
}

const getLocationsSuccess = responseData => {
  const locationCardsHtml = locationCardsTemplate({ locations: responseData.locations })
  $('.location-cards').empty()
  $('.location-cards').append(locationCardsHtml)
}

const getLocationsFailure = () => {
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getLocationsFailure
}
