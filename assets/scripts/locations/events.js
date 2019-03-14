const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const commonUi = require('../common-ui.js')

const onAddLocationPressed = event => {
  event.preventDefault()
  ui.addLocationPressed()
}

const onAddLocation = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.addLocation(formData)
    .then(ui.addLocationSuccess)
    .catch(commonUi.emptyDynamic)
}

const onGetALocation = event => {
  event.preventDefault()

  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[1])

  api.getALocation(targetNum)
    .then(ui.gotALocationSuccess)
}

const getAllLocations = event => {
  event.preventDefault()

  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
}

const onDeleteLocation = event => {
  event.preventDefault()
  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[1])

  api.deleteLocation(targetNum)
    .then(ui.deleteLocationSuccess)
}

const onUpdateLocation = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const apiData = { location: {} }

  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[3])

  for (const key in formData.location) {
    if (formData.location[key] !== '') {
      apiData.location[key] = formData.location[key]
    }
  }

  api.updateLocation(targetNum, apiData)
    .then(ui.updateLocationSuccess)
}

const addHandlers = () => {
  $('.sidenav').on('click', '#add-location-button', onAddLocationPressed)
  $('.sidenav').on('click', '#get-locations-button', getAllLocations)
  $('.authorized-form').on('submit', '#create-location-form', onAddLocation)
  $('.welcome-cards').on('click', '.get-details', onGetALocation)
  $('.welcome-cards').on('click', '.delete-location', onDeleteLocation)
  $('.welcome-cards').on('click', '#get-profile', getAllLocations)
  $('.welcome-cards').on('submit', '.update-location-form', onUpdateLocation)
}

module.exports = {
  addHandlers
}
