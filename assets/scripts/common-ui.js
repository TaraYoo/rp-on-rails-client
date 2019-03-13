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
  store.user.locations = responseData.locations

  const name = store.user.email.split('@')[0]
  const locations = store.user.locations

  const locationCardsHtml = welcomeCardsTemplate({
    name: name,
    locations: locations
  })
  $('.welcome-cards').empty()
  $('.welcome-cards').append(locationCardsHtml)
  // update store.user.locations per each pull
}

const getLocationsFailure = () => {
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getLocationsFailure
}
