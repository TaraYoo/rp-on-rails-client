const config = require('../config.js')
const store = require('../store.js')

const createLocation = () => {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createLocation
}
