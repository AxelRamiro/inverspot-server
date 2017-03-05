// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - User ---> Schema de mongoose para usuarios extraido de (./model.js)
// - sendMail ---> Funcion para envio de emails (../../mailing/index.js)
module.exports = (router, User, sendMail) => {
  require('./create')(router,User, sendMail)
  require('./update')(router,User)
  require('./delete')(router,User)
  require('./find')(router,User)
}
