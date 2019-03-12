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

  console.log(formData)

  api.addLocation(formData)
    .then(ui.addLocationSuccess)
    .catch(ui.addLocationFailure)
}

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('#add-location-button').on('click', onAddLocationPressed)
  $('#create-location-form').on('submit', onAddLocation)
}

module.exports = {
  addHandlers
}
