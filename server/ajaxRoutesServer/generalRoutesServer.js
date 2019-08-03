'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls for actions other than accessing the database, like sending e-mail
 */

const express = require('express')
const router = express.Router()

const { forms, getTableFromForm } = require('../../joint/dataValidation/general/formsAndTable')

const extractDataForForm = require('../utils/extractDataForForm')
const asyncMiddleware = require('../utils/asyncMiddleware')
const processFields = require('../../joint/businessLogic/general/processFields')

const sendEmail = require('../utils/sendEmail')

router.post('/sendEmail', asyncMiddleware(async (req, res) => {

  const currentForm = forms.SEND_EMAIL

  let objectInputData = extractDataForForm(currentForm,req.body)

  objectInputData = processFields(currentForm,objectInputData)

  sendEmail(objectInputData, function(responseMessage) {
    res.status(200).send(responseMessage)
  })

}))

module.exports = router
