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

module.exports = {
  addLocation,
  getLocations
}
