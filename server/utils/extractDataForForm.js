'use strict'

/*
 * This file extracts only data for the current form, and removes the 
 * first part of the string that contains the form name
 */

const extractDataForForm = (currentForm, inputData) => {
  let outputData = {}
  let checkForm
  let element

  for (const [key, value] of Object.entries(inputData)) {
    [checkForm, element] = key.split('__')
    if (checkForm === currentForm) {
      outputData[element] = value
    }
  }

  return outputData
}

module.exports = extractDataForForm