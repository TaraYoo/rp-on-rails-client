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
    .catch(commonUi.emptyDynamic)
}

const getRandomBokbulbok = event => {
  event.preventDefault()
  api.randomBokbulbok()
    .then(ui.getRandomBokbulbokSuccess)
}

const onDeleteBokbulbok = event => {
  event.preventDefault()

  const targetId = event.target.id.split('-')[2]
  api.deleteBokbulbok(targetId)
    .then(ui.deleteBokbulbokSuccess)
}

const cancelForms = event => {
  event.preventDefault()

  $('.authorized-form').empty()
}

const addHandlers = () => {
  $('.sidenav').on('click', '#get-bokbulboks-button', onGetBokbulboks)
  $('.sidenav').on('click', '#add-bokbulbok-button', onAddBokbulbokPressed)
  $('.authorized-form').on('submit', '#create-bokbulbok-form', onAddBokbulbok)
  $('.authorized-form').on('click', '.cancel-btn', cancelForms)
  $('.welcome-cards').on('click', '.delete-bokbulbok', onDeleteBokbulbok)
  $('.welcome-cards').on('click', '#get-bokbulbok', getRandomBokbulbok)
}

module.exports = {
  addHandlers
}
