// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - User ---> Schema de mongoose para usuarios extraido de (../user/model.js)
// - jwt ---> Modulo jsonwebtoken
// - config ---> Configuraciones del API, (../../../config/index.js)
// - sendMail ---> Funcion para envio de emails (../../mailing/index.js)
// - passport ---> Modulo passport para inicio con facebook.
module.exports = (router, User, jwt, config, sendMail, passport) => {
  require('./authenticate')(router, User, jwt, config)
  require('./verify')(router, User, jwt, config, sendMail)
  require('./recovery')(router, User, sendMail)
  require('./signup')(router, User, sendMail)
  require('./facebook')(router, User, jwt, config, passport)
}
