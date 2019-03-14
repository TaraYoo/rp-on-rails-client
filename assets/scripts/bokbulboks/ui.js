'use strict'

const commonUi = require('../common-ui.js')
const addBokbulbokTemplate = require('../templates/add-bokbulbok-form.handlebars')
const randomBokbulbokTemplate = require('../templates/random-bokbulbok.handlebars')
const api = require('./api.js')
const updateStores = require('../storages.js')

const getRandomBokbulbokSuccess = responseData => {
  const randomBokbulbokHtml = randomBokbulbokTemplate({ bokbulbok: responseData.bokbulbok })

  $('.bokbulbok').empty()
  $('.bokbulbok').append(randomBokbulbokHtml)

  const bokbulbokId = responseData.bokbulbok.id
  api.updateBokbulbok(bokbulbokId)
    .then(updateStores.updateUserBokbulbok)
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
  api.getBokbulboks()
    .then(commonUi.storeBokbulboks)
}

const deleteBokbulbokSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // create user message
  $('.authorized-form').text('You successfully deleted a location')

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)

  // store new bokbulboks locally
  api.getBokbulboks()
    .then(commonUi.getBokbulboksSuccess)
}

module.exports = {
  getBokbulboksFailure,
  getRandomBokbulbokSuccess,
  addBokbulbokPressed,
  addBokbulbokSuccess,
  deleteBokbulbokSuccess
}
