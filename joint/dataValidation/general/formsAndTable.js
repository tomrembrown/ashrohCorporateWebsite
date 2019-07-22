'use strict'

/*
 * Contains an object with list of forms - so form names are
 * consistent everywhere. Also has a map to determine which
 * database tables are associated with which forms - for the 
 * purpose of database searches in some generic functions
 */

const forms = {
  SEND_EMAIL: 'sendEmail'
}

const getTableFromForm = new Map([
  [forms.SEND_EMAIL, 'NONE']
])

module.exports = { forms, getTableFromForm }