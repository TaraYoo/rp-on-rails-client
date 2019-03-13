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
    .catch(ui.addLocationFailure)
}

const onGetALocation = event => {
  event.preventDefault()

  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[1])

  api.getALocation(targetNum)
    .then(ui.gotALocationSuccess)
    .catch(ui.gotALocationFailure)
}

const getAllLocations = event => {
  event.preventDefault()

  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
}

const onDeleteLocation = event => {
  event.preventDefault()
  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[1])

  api.deleteLocation(targetNum)
    .then(ui.deleteLocationSuccess)
    .catch(ui.deleteLocationFailure)
}

const onUpdateLocationPressed = event => {
  event.preventDefault()

  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[1])

  ui.updateLocationPressed(targetNum)
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
    .catch(ui.updateLocationFailure)
}

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('.nav-wrapper').on('click', '#add-location-button', onAddLocationPressed)
  $('#create-location-form').on('submit', onAddLocation)
  $('.location-cards').on('click', '.get-details', onGetALocation)
  $('.location-cards').on('click', '.delete-btn', onDeleteLocation)
  $('.location-cards').on('click', '#get-profile', getAllLocations)
  $('.location-cards').on('click', '.update-btn', onUpdateLocationPressed)
  $('.location-cards').on('submit', '.update-location-form', onUpdateLocation)
}

module.exports = {
  addHandlers
}
