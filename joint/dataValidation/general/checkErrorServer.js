'use strict'

const constants = require('../../constants')
const checkDuplicateInUniqueField = require('./checkDuplicateInUniqueField')

const checkErrorServer = async (currentForm, element, value, formElements) => {

  const formElement = element.split('__')[1]

  if (constants.uniqueElements.includes(formElement)) {

    const isDuplicate = await checkDuplicateInUniqueField(currentForm, formElement, value)

    if (isDuplicate) {
      return {
        element: element,
        message: "'" + value + "' as a " + formElement + " is already taken"
      }
    }
  }
}

module.exports = checkErrorServer
