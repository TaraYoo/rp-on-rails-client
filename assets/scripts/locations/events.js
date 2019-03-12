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

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('#add-location-button').on('click', onAddLocationPressed)
  $('#create-location-form').on('submit', onAddLocation)
  $('.location-cards').on('click', '.card', onDeleteLocation)
}

module.exports = {
  addHandlers
}
