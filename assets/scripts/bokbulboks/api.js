const config = require('../config.js')
const store = require('../store.js')

const getBokbulboks = () => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getABokbulBok = (id) => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBokbulboks,
  getABokbulBok
}
