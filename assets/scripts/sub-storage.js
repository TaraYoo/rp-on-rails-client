'use strict'

const store = require('./store.js')

const storeBokbulboks = responseData => {
  store.user.bokbulboks = responseData.bokbulboks
}

module.exports = {
  storeBokbulboks
}
