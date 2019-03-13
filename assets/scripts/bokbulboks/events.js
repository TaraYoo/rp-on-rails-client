'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const commonUi = require('../common-ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetBokbulboks = event => {
  event.preventDefault()

  api.getBokbulboks(store)
    .then(commonUi.getBokbulboksSuccess)
    .catch(commonUi.getLocationsFailure)
}

const onAddBokbulbokPressed = event => {
  event.preventDefault()

  ui.addBokbulbokPressed()
}

const onAddBokbulbok = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.addBokbulbok(formData)
    .then(ui.addBokbulbokSuccess)
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
  $('.nav-wrapper').on('click', '#add-bokbulbok-button', onAddBokbulbokPressed)
  $('.authorized-form').on('submit', '#create-bokbulbok-form', onAddBokbulbok)
  $('.location-cards').on('click', '#get-bokbulbok', getRandomBokbulbok)
}

module.exports = {
  addHandlers
}
