'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const commonUi = require('../common-ui.js')

const onGetBokbulboks = event => {
  event.preventDefault()

  api.getBokbulboks(store)
    .then(commonUi.getBokbulboksSuccess)
    .catch(commonUi.getLocationsFailure)
}

const getRandomBokbulbok = event => {
  event.preventDefault()
  const availableIds = []
  store.bokbulboks.forEach(object => availableIds.push(object.id))
  const targetId = availableIds[Math.floor(Math.random() * availableIds.length)]
  api.getABokbulBok(targetId)
    .then(ui.getRandomBokbulbokSuccess)
    .catch(ui.getBokbulboksFailure)
}

const addHandlers = () => {
  $('.nav-wrapper').on('click', '#get-bokbulboks-button', onGetBokbulboks)
  $('.location-cards').on('click', '#get-bokbulbok', getRandomBokbulbok)
}

module.exports = {
  addHandlers
}
