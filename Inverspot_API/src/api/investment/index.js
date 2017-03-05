// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - Investment ---> Schema de mongoose para inversiones extraido de (./model.js)
// - Property ---> Schema de mongoose para propiedades extraido de (../property/model.js)
// - User ---> Schema de mongoose para usuarios extraido de (../user/model.js)
// - sendMail ---> Funcion para envio de emails (../../mailing/index.js)
module.exports = (router, Investment, Property, User, sendMail) => {
  require('./create')(router, Investment, Property, User, sendMail)
  require('./find')(router, Investment)
  require('./update')(router, Investment, Property)
  require('./delete')(router, Investment, Property)
}
