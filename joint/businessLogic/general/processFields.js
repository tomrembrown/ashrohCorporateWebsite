'use strict'

/*
 * This function does necessary processing for data input on fields
 * coming from the client - like trimming fields and removing data,
 * or removing non-number characters from number fields
 */

const constants = require('../../constants')

const processFields = (currentForm, objectInputData) => {
  
  // Trim all fields and remove any that are empty
  for (let field in objectInputData) {
    if (objectInputData.hasOwnProperty(field)) {
      if (typeof objectInputData[field] === 'string')
        objectInputData[field] = objectInputData[field].trim()

      if (objectInputData[field] === '') {
        delete objectInputData[field]
      }
    }
  }

  // Remove all non-number characters from number fields like phone number
  for (const fieldName of constants.numberFields) {
    if (objectInputData[fieldName]) {
      objectInputData[fieldName] = objectInputData[fieldName].replace(/\D/g, '')
    }
  }

  return objectInputData
}

module.exports = processFields
