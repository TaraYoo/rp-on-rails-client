'use strict'

const welcomeCardsTemplate = require('./templates/welcome-page.handlebars')
const store = require('./store.js')
const bokbulbokCardsTemplate = require('./templates/bokbulbok-cards.handlebars')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.bokbulbok').text('')
  $('.forms-to-show').empty()
}

const storeBokbulboks = responseData => {
  store.user.bokbulboks = responseData.bokbulboks
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

const getBokbulboksSuccess = responseData => {
  store.user.bokbulboks = responseData.bokbulboks

  const bokbulbokCardsHtml = bokbulbokCardsTemplate({
    bokbulboks: store.user.bokbulboks
  })

  $('.welcome-cards').empty()
  $('.welcome-cards').append(bokbulbokCardsHtml)
}

const getLocationsFailure = () => {
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getBokbulboksSuccess,
  getLocationsFailure,
  storeBokbulboks
}
