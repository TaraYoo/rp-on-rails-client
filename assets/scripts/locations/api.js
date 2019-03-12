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

module.exports = {
  addLocation
}
