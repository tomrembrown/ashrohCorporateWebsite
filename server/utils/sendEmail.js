'use strict'
/*
 * This file uses nodemailer to send e-mails with mailgun
 */

const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'key-',
    domain: 'ashroh.com'
  },
  proxy: false
}

const sendEmail = (objectInputData, callback) => {

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail({
    from: 'feedbackCorporateSite@ashroh.com',
    to: 'tom@ashroh.com',
    subject: objectInputData.subject,
    text: 'Message from ' + objectInputData.name + '(' + objectInputData.email + 
          ') on ashroh.com form\n' + objectInputData.message
  }, function(error, info) {
    if (error) {
      console.log('Error: ' + error)
      throw Error(error)
    }
    else {
      return callback(info.message)
    }
  })

}

module.exports = sendEmail
