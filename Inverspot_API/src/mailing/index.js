const nodemailer = require('nodemailer')

// Funcion para el formato de cantidades en los templates de emails
function currency (value){
  return '$ ' + value
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    }

// Exporta el metodo para envio de emails
module.exports = (config) =>{
  transporter = nodemailer.createTransport(config.mailing.connection)
  return function( options, template, params, cb) {
    if (!options.to) return cb(true, null)
    // inyecta los datos a los templates y extrae el HTML para enviar.
    let mail = require(`./templates/${template}`)(params, config, currency)
    // configura las opciones de envio con el modulo config de la API
    options.html = mail
    options.from = config.mailing.from
    options.cc = config.mailing.cc
    transporter.sendMail(options, cb)
  }
}
