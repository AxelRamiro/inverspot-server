const nodemailer = require('nodemailer')

module.exports = (config) =>{
  transporter = nodemailer.createTransport(config.mailing.connection)
  return function( options, template, params, cb) {
    if (!options.to) return cb(true, null)
    let mail = require(`./templates/${template}`)(params)
    options.html = mail
    options.from = config.mailing.from
    transporter.sendMail(options, cb)
  }
}
