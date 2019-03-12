const store = require('../store.js')
const commonUi = require('../common-ui.js')

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

module.exports = {
  addLocationPressed
}
