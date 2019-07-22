'use strict'

const constants = require('../../constants')

const possibleServerError = (currentForm, element, value, formElements) => {
  const formElement = element.split('__')[1]
  return constants.uniqueElements.includes(formElement)
}

module.exports = possibleServerError
