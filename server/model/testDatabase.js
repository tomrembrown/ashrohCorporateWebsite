'use strict'

const db = require('./db')

db.query('SELECT NOW() AS "theTime"', (err, res) => {
  if (err) {
    return console.error('error running query', err)
  }
  console.log('The database is working!  The time is: ' + res.rows[0].theTime)
  db.end()
})
