const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

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

  const targeted = event.target.id
  const targetNum = parseInt(targeted.split('-')[3])

  const form = event.target
  const formData = getFormFields(form)

  api.updateLocation(targetNum, formData)
    .then(ui.updateLocationSuccess)
    .catch(ui.updateLocationFailure)
}

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('#add-location-button').on('click', onAddLocationPressed)
  $('#create-location-form').on('submit', onAddLocation)
  $('.location-cards').on('click', '.delete-btn', onDeleteLocation)
  $('.location-cards').on('click', '.update-btn', onUpdateLocationPressed)
  $('.forms-to-show').on('submit', '.update-location-form', onUpdateLocation)
}

module.exports = {
  addHandlers
}
