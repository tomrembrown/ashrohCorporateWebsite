const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'key-01e530e73325f2b75aecd0a9d3346ef4',
    domain: 'ashroh.com'
  },
  proxy: false
}

const sendEmail = (objectInputData) => {
  console.log('In sendEmail')
  console.log('Name: ' + objectInputData.name)
  console.log('Email: ' + objectInputData.email)
  console.log('Subject: ' + objectInputData.subject)
  console.log('Message: ' + objectInputData.message)

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  nodemailerMailgun.sendMail({
    from: objectInputData.email,
    to: 'tom@ashroh.com',
    subject: objectInputData.subject,
    text: 'Message from ' + objectInputData.name + ' on ashroh.com form\n' + objectInputData.message
  }, function(err, info) {
    if (err) {
      console.log('Error: ' + err)
    }
    else {
      console.log('Response: ' + info)
    }
  })

}

module.exports = sendEmail