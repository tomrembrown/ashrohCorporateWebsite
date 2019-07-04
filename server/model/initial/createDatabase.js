'use strict'

const path = require('path')

const db = require('./../db')
const fs = require('fs')

let sqlScript = fs
  .readFileSync(path.join(__dirname, '/createDatabase.sql'))
  .toString()

db.query(sqlScript, (err, res) => {
  if (err) {
    return console.error('error running query', err)
  }
  console.log('Tables successfully created!')
  db.end()
})
