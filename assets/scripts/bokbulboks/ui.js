'use strict'

const getRandomBokbulbokSuccess = responseData => {
  $('.location-alerts').text(responseData.bokbulbok.description)
  $('.bokbulbok-cards').empty()
  $('.bokbulbok-cards').append(responseData.bokbulbok.description)
}

const getBokbulboksFailure = responseData => {
  $('.bokbulbok-alerts').text('something went wrong')
}

module.exports = {
  getBokbulboksFailure,
  getRandomBokbulbokSuccess
}
