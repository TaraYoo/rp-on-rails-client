'use strict'

const bokbulbokApi = require('./bokbulboks/api.js')
const subStorage = require('./sub-storage.js')
const store = require('./store.js')

const updateUserBokbulbok = () => {
  bokbulbokApi.getBokbulboks()
    .then(subStorage.storeBokbulboks)
}

module.exports = {
  updateUserBokbulbok
}
