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

const addBokbulbok = formData => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getABokbulBok = id => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBokbulbok = id => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBokbulbok = id => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      bokbulbok: {
        used: true
      }
    }
  })
}

module.exports = {
  getBokbulboks,
  getABokbulBok,
  addBokbulbok,
  deleteBokbulbok,
  updateBokbulbok
}
