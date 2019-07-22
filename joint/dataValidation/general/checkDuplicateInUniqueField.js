'use strict'

const constants = require('../../constants')
const axios = require('axios')

const checkDuplicateInUniqueField = async (currentForm, formElement, value) => {

  if (constants.uniqueElements.indexOf(formElement) > -1 && value.trim()) {
    const response = await axios.get('readRoutesServer/checkElementTaken/' + currentForm +'/' + formElement + '/' + value)
    return response.data
  } else {
    return null
  }

}

module.exports = checkDuplicateInUniqueField
