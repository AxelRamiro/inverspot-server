// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - Builder ---> Schema de mongoose para constructoras extraido de (./model.js)
module.exports = (router, Builder) => {
  require('./create')(router, Builder)
  require('./find')(router, Builder)
  require('./update')(router, Builder)
  require('./delete')(router, Builder)
}
