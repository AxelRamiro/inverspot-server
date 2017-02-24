const nodemailer = require('nodemailer')
function currency (value){
  return '$ ' + value
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    }


module.exports = (config) =>{
  transporter = nodemailer.createTransport(config.mailing.connection)
  return function( options, template, params, cb) {
    if (!options.to) return cb(true, null)
    let mail = require(`./templates/${template}`)(params, config, currency)
    options.html = mail
    options.from = config.mailing.from
    transporter.sendMail(options, cb)
  }
}
