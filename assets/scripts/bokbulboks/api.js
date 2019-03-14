const config = require('../config.js')
const store = require('../store.js')
const failures = require('../failure-message.js')

const getBokbulboks = () => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

const addBokbulbok = formData => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    statusCode: failures.edgeStatuses
  })
}

const getABokbulBok = id => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
  })
}

const deleteBokbulbok = id => {
  return $.ajax({
    url: config.apiUrl + '/bokbulboks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    statusCode: failures.edgeStatuses
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
    },
    statusCode: Object.assign(failures.edgeStatuses, {
      400: function () { failures.failureMessage('This risk or reward did not get logged as used. I\'m sorry about the inconvenience.') }
    })
  })
}

module.exports = {
  getBokbulboks,
  getABokbulBok,
  addBokbulbok,
  deleteBokbulbok,
  updateBokbulbok
}
