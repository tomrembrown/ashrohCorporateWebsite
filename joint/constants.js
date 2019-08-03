'use strict'

const { forms } = require('./dataValidation/general/formsAndTable')

let constants = {}

constants.minLengths = {
  name: 3,
  email: 5,
  subject: 5,
  message: 20
}

// Forms can't be submitted without these elements
constants.mandatoryElements = {}
constants.mandatoryElements[forms.SEND_EMAIL] = ['name', 'email', 'subject', 'message']

/***
 * Data Modifications
 */

//Number fields - strip all non-numeric characters from these before going to database
constants.numberFields = []

module.exports = constants
