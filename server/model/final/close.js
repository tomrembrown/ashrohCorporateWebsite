'use strict'

const db = require('./../db')

const close = async function () {
  try {
    db.end()
  } catch (err) {
    console.error('Could not close database', err)
  }
}

module.exports = close
