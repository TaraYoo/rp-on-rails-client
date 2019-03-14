const config = require('../config.js')
const store = require('../store.js')
const failures = require('../failure-message.js')

const addLocation = formData => {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    statusCode: failures.edgeStatuses
  })
}

const getLocations = responseData => {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + responseData.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

const getALocation = id => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

const deleteLocation = id => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

const updateLocation = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    statusCode: failures.edgeStatuses
  })
}

module.exports = {
  addLocation,
  getLocations,
  deleteLocation,
  updateLocation,
  getALocation
}
