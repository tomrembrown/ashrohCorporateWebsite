'use strict'

import axios from 'axios'
import { forms } from '../../../../joint/dataValidation/general/formsAndTable'
const checkErrorClient = require('../../../../joint/dataValidation/general/checkErrorClient')
const checkErrorServer = require('../../../../joint/dataValidation/general/checkErrorServer')
const possibleServerError = require('../../../../joint/dataValidation/general/possibleServerError')
const checkMandatoryElementsSet = require('../../../../joint/dataValidation/general/checkMandatoryElementsSet')
const checkVerifyPassword = require('../../../../joint/dataValidation/general/checkVerifyPassword')

const state = {
  currentForm: null,
  formElements: {},
  errors: []
}

const mutations = {
  setThisForm(state, formName) {
    state.currentForm = formName
  },
  setElement(state, payload) {
    state.formElements[payload.element] = payload.value
  },
  removeElement(state, element) {
    if (element in state.formElements) {
      delete state.formElements[element]
    }
  },  
  addError(state, thisError) {
    if (thisError != null) {
      state.errors.push(thisError)
    }
  },
  removeError(state, element) {
    const errorLocation = state.errors.indexOf(
      state.errors.find(error => {
        return error !== undefined && error.element === element
      })
    )
    if (errorLocation !== -1) {
      state.errors.splice(errorLocation, 1)
    }
  },
  resetAllForms(state) {
    state.formElements = {}
    state.errors = []
  }
}

const getters = {
  getError: state => element => {
    return state.errors.filter(
      error => error !== undefined && error.element === element
    )
  }
}

const actions = {
  checkErrorAndSetElement: async ({ commit }, payload) => {
    commit('setElement', payload)
    let thisError = null
    thisError = checkErrorClient(
      state.currentForm,
      payload.element,
      payload.value,
      state.formElements
    )
    if (thisError == null && possibleServerError(state.currentForm,payload.element)) {
      thisError = await checkErrorServer(
        state.currentForm,
        payload.element,
        payload.value,
        state.formElements
      )
    }
    commit('removeError', payload.element)
    commit('addError', thisError)
  },
  submitForm: async ({ commit, state, getters }) => {
    try {
      const missingErrors = checkMandatoryElementsSet(state.currentForm,state.formElements)
      if (missingErrors.length > 0) {
        missingErrors.forEach(thisError => {
          commit('removeError', thisError.element)
          commit('addError', thisError)
        })
        document.getElementById(missingErrors[0].element).scrollIntoView()
        return false
      }

      if (state.currentForm === forms.CREATE_ORGANIZATION) {

        const verifyError = checkVerifyPassword(state.formElements)
        if (verifyError !== null) {
          commit('removeError', verifyError.element)
          commit('pushError', verifyError)
          document.getElementById(verifyError.element).scrollIntoView()
          return false
        }

      }

      // For some reason sometimes undefined errors appear - remove any
      state.errors = state.errors.filter(error => error !== undefined)

      // Determine how many errors for this form only
      const formStr = state.currentForm + '__'
      const formStrLen = formStr.length

      // Only submit form if no errors
      if (!(state.errors.some(error => error.element.substring(0,formStrLen) === formStr))) {

        const response = await axios.post(
          'createRoutesServer/create/' + state.currentForm, state.formElements
        )
   
        if (response.data.isError) throw new Error(response.data.message)

        if (state.currentForm === forms.CREATE_ORGANIZATION) {
          // Also, switch to being logged in and store login token
          commit('login', {
            loginToken: response.data.loginToken,
            organizationLogin: state.formElements[forms.CREATE_ORGANIZATION + '__login'],
            organizationID: response.data.id
          })
        }
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(`Error attempting to submit form: ${error.message}`)
      alert(`Error attempting to submit form: ${error.message}`)
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
