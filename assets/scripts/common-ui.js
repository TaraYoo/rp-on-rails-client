'use strict'

const welcomeCardsTemplate = require('./templates/welcome-page.handlebars')
const store = require('./store.js')
const bokbulbokCardsTemplate = require('./templates/bokbulbok-cards.handlebars')

const emptyDynamic = () => {
  $('form').trigger('reset')
  $('.forms-to-show').empty()
  $('.bokbulbok').empty()
}

const getLocationsSuccess = responseData => {
  store.user.locations = responseData.locations
  emptyDynamic()

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
  emptyDynamic()

  const bokbulbokCardsHtml = bokbulbokCardsTemplate({
    bokbulboks: store.user.bokbulboks
  })

  $('.welcome-cards').empty()
  $('.welcome-cards').append(bokbulbokCardsHtml)
}

module.exports = {
  emptyDynamic,
  getLocationsSuccess,
  getBokbulboksSuccess
}
