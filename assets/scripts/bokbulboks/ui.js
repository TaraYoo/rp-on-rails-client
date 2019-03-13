'use strict'

const commonUi = require('../common-ui.js')
const addBokbulbokTemplate = require('../templates/add-bokbulbok-form.handlebars')
const api = require('./api.js')
const store = require('../store.js')

const getRandomBokbulbokSuccess = responseData => {
  $('.location-alerts').text(responseData.bokbulbok.description)
  $('.bokbulbok-cards').empty()
  $('.bokbulbok-cards').append(responseData.bokbulbok.description)
}

const getBokbulboksFailure = responseData => {
  $('.bokbulbok-alerts').text('something went wrong')
}

const addBokbulbokPressed = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // show the add-risks-or-rewards-form
  const addBokbulbokHtml = addBokbulbokTemplate()
  $('.authorized-form').empty()
  $('.authorized-form').append(addBokbulbokHtml)
}

const addBokbulbokSuccess = responseData => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // Show post-sign-in menus
  $('.authorized-form').text('You added risk or reward ' + responseData.bokbulbok.id)

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)

  // make a second api request and store to user
  api.getBokbulboks(store)
    .then(commonUi.storeBokbulboks)
    .catch(commonUi.getLocationsFailure)
}

module.exports = {
  getBokbulboksFailure,
  getRandomBokbulbokSuccess,
  addBokbulbokPressed,
  addBokbulbokSuccess
}
