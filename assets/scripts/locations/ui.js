const commonUi = require('../common-ui.js')
const api = require('./api.js')
const store = require('../store.js')
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
    .catch(commonUi.failureMessage)
}

const gotALocationSuccess = responseData => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // show the single location
  const singleLocationHtml = singleLocationTemplate({location: responseData.location})
  $('.welcome-cards').empty()
  $('.welcome-cards').append(singleLocationHtml)
}

const deleteLocationSuccess = () => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // create user message
  $('.authorized-form').text('You successfully deleted a location')

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)

  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.failureMessage)
}

const updateLocationSuccess = responseData => {
  // empty all dynamic content
  commonUi.emptyDynamic()

  // create user message
  $('.authorized-form').text('You successfully updated ' + responseData.location.name)

  setTimeout(() => {
    $('.authorized-form').empty()
  }, 2000)

  // go back to initial profile page
  api.getLocations(store)
    .then(commonUi.getLocationsSuccess)
    .catch(commonUi.failureMessage)
}

module.exports = {
  addLocationPressed,
  addLocationSuccess,
  deleteLocationSuccess,
  updateLocationSuccess,
  gotALocationSuccess
}
