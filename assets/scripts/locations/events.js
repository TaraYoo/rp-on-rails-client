'use strict'

const ui = require('./ui.js')

const tempTest = (event) => {
  event.preventDefault()
  console.log(event)
  ui.testHandlebars()
}

const addHandlers = () => {
  $('body').on('click', tempTest)
}

module.exports = {
  addHandlers
}
