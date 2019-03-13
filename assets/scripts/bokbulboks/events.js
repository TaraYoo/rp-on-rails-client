'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetBokbulboks = event => {
  event.preventDefault()

  api.getBokbulboks(store)
    .then(ui.getBokbulboksSuccess)
    .catch(ui.getBokbulboksFailure)
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
  $('#get-bokbulboks-button').on('click', onGetBokbulboks)
  $('.location-cards').on('click', '#get-bokbulbok', getRandomBokbulbok)
}

module.exports = {
  addHandlers
}
