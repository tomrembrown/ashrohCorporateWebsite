'use strict'

const constants = require('../../constants')
const checkVerifyPassword = require('./checkVerifyPassword')
const { forms } = require('../general/formsAndTable')

const checkErrorClient = (currentForm, element, value, formElements) => {

  const formElement = element.split('__')[1]

  // Less than min length error
  if (
    formElement in constants.minLengths &&
    value.length < constants.minLengths[formElement]
  ) {
    return {
      element: element,
      message:
        'The value for ' +
        formElement +
        ' must be at least ' +
        constants.minLengths[formElement] +
        ' characters long'
    }
  }

  // Verify password error
  if (currentForm === forms.CREATE_ORGANIZATION && formElement === 'verify_password') {
    const verifyError = checkVerifyPassword(formElements)
    if (verifyError !== null) return verifyError
  }

}

module.exports = checkErrorClient
