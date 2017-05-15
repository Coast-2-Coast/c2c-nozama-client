'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const appEvents = require('./app/events.js')

$(() => {
  setAPIOrigin(location, config)
  // Upon page load, hides all views except views passed in array to showView
  // View options are 'header-view' 'drawer-view' 'sign-in-view' 'sign-up-view' 'change-password-view'
  // console.log('Page loaded')
  appEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
