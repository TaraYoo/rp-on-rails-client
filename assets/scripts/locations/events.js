const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onAddLocationPressed = event => {
  event.preventDefault()
  ui.addLocationPressed()
}

const addHandlers = () => {
  // $('body').on('click', tempTest)
  $('#add-location-button').on('click', onAddLocationPressed)
}

module.exports = {
  addHandlers
}
