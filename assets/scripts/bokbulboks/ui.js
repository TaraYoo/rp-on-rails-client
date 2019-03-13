'use strict'

const bokbulbokCardsTemplate = require('../templates/bokbulbok-cards.handlebars')
const store = require('../store.js')

const getBokbulboksSuccess = responseData => {
  const bokbulbokCardsHtml = bokbulbokCardsTemplate({
    bokbulboks: responseData.bokbulboks
  })
  store.bokbulboks = responseData.bokbulboks
  $('.bokbulbok-cards').empty()
  $('.bokbulbok-cards').append(bokbulbokCardsHtml)
}

const getRandomBokbulbokSuccess = responseData => {
  $('.location-alerts').text(responseData.bokbulbok.description)
  $('.bokbulbok-cards').empty()
  $('.bokbulbok-cards').append(responseData.bokbulbok.description)
}

const getBokbulboksFailure = responseData => {
  $('.bokbulbok-alerts').text('something went wrong')
}

module.exports = {
  getBokbulboksSuccess,
  getBokbulboksFailure,
  getRandomBokbulbokSuccess
}
