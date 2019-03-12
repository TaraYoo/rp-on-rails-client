const config = require('../config.js')
const store = require('../store.js')

const addLocation = formData => {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getLocations = responseData => {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + responseData.user.token
    }
  })
}

const getALocation = id => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteLocation = id => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateLocation = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addLocation,
  getLocations,
  deleteLocation,
  updateLocation,
  getALocation
}
