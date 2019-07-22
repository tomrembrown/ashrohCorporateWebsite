'use strict'

const constants = require('../../constants')

const checkMandatoryElementsSet = function (currentForm, formElements) {
  let missingErrors = []

  if (constants.mandatoryElements[currentForm]) {

    constants.mandatoryElements[currentForm].forEach(element => {
      if (typeof formElements[currentForm + '__' + element] === 'undefined') {
        missingErrors.push({
          element: currentForm + '__' + element,
          message: 'This is a mandatory field'
        })
      }
    })

  }

  return missingErrors
}

module.exports = checkMandatoryElementsSet
