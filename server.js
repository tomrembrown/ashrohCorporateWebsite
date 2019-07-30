'use strict'

const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')

require('dotenv').config() // load the environment variables from .env

// Requires of my files
const generalRoutesServer = require('./server/ajaxRoutesServer/generalRoutesServer')

const app = express()

app.use(history()) // To get the SPA router to work

app.use(express.json()) // For handling json data from POST requests

// For security reasons, don't send info on server to client
app.disable('x-powered-by')

app.set('port', process.env.PORT)

// Run static files out of pubic directories in view & view-model on client
app.use('/', express.static(path.join(__dirname, 'client/view/public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

// The one route for now - just go to the main page - all routing actually
// handled by the front-end SPA (except AJAX routes below)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/view/public/index.html'))
})

// AJAX routes
app.use('/generalRoutesServer', generalRoutesServer)

// Error handling
app.use((error, req, res, next) => {
  console.log('Error occurred in express')
  res.json({ isError: true, message: error.message })
})

// Start server listening for requests from browser
let logString = ' Express started on http://localhost:' + app.get('port') + '; '
if (app.get('env') === 'development') { logString += 'Open page on webpack server at localhost:8080; ' }
logString += 'press Ctr-C to terminate.'

app.listen(app.get('port'), () => {
  console.log(logString)
})
