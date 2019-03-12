'use strict'

const locationCardsTemplate = require('./templates/location-cards.handlebars')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.landing-alerts').text('')
}

const getLocationsSuccess = responseData => {
  responseData.locations.forEach(function (data) { console.log(data) })
  const locationCardsHtml = locationCardsTemplate({ locations: responseData.locations })
  $('.location-cards').empty()
  $('.location-cards').append(locationCardsHtml)
}

const getLocationsFailure = () => {
  console.log('failure')
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getLocationsFailure
}
