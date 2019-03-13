const commonUi = require('../common-ui.js')
const api = require('./api.js')
const store = require('../store.js')
const updateLocationFormTemplate = require('../templates/update-location-form.handlebars')
const singleLocationTemplate = require('../templates/single-location.handlebars')
const addLocationTemplate = require('../templates/add-location-form.handlebars')

const addLocationPressed = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // show the add-location-form
  const addLocationHtml = addLocationTemplate()
  $('.authorized-form').empty()
  $('.authorized-form').append(addLocationHtml)
}

const updateLocationPressed = (targetNum) => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('.location-cards').hide()
  $('#create-location-form').hide()
  // show the update-location-form
  const updateFormHtml = updateLocationFormTemplate({targetNum: targetNum})
  $('.forms-to-show').append(updateFormHtml)
  $('.forms-to-show').show()
}

const addLocationSuccess = responseData => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // Show post-sign-in menus
  $('.authorized-form').text('You added ' + responseData.location.name)

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)

  // make a second api request and store to user
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
}

const gotALocationSuccess = responseData => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('.location-cards').hide()
  $('#create-location-form').hide()
  // show the single location
  const singleLocationHtml = singleLocationTemplate({location: responseData.location})
  $('.location-cards').append(singleLocationHtml)
  $('.location-cards').show()
}

const deleteLocationSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()

  // create user message
  $('.location-alerts').text('You successfully deleted location')
  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  $('.location-cards').show()
}

const updateLocationSuccess = responseData => {
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

const deleteLocationFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()

  // create user message
  $('.location-alerts').text('Something went wrong, and your location was not deleted. Please try again')
  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  $('.location-cards').show()
}

const updateLocationFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()

  // create user message
  $('.update-location-alert').text('Something went wrong, and your location was not updated. Please try again')
  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  $('.location-cards').show()
}

const gotALocationFailure = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // hide all unrelated content
  $('.landing-forms').hide()
  $('#change-password-form').hide()
  $('#create-location-form').hide()

  // create user message
  $('.location-alerts').text('Something went wrong. Please try again')
  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.getLocationsFailure)
  $('.location-cards').show()
}

module.exports = {
  addLocationPressed,
  addLocationSuccess,
  addLocationFailure,
  deleteLocationSuccess,
  deleteLocationFailure,
  updateLocationPressed,
  updateLocationSuccess,
  updateLocationFailure,
  gotALocationSuccess,
  gotALocationFailure
}
