const commonUi = require('../common-ui.js')
const api = require('./api.js')
const store = require('../store.js')

const addLocationPressed = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('.location-cards').hide()
  // show the sign-up-form
  $('#create-location-form').show()
}

const addLocationSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()
  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  $('.location-cards').show()
}

const addLocationFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  // go back to initial sign in page
  $('.create-location-alert').text('Your location wasn\'t added. Please try again')
}

module.exports = {
  addLocationPressed,
  addLocationSuccess,
  addLocationFailure
}
