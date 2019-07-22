'use strict'

const { forms } = require('../general/formsAndTable')

const checkVerifyPassword = function (formElements) {
  const password = formElements[forms.CREATE_ORGANIZATION + '__password']
  const verify_password = formElements[forms.CREATE_ORGANIZATION + '__verify_password']
 
  if (password !== verify_password) {
    return {
      element: forms.CREATE_ORGANIZATION + '__verify_password',
      message: 'The passwords do not match'
    }
  } else {
    return null
  }
}

module.exports = checkVerifyPassword
