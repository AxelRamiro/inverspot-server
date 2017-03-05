// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - Property ---> Schema de mongoose para propiedades extraido de (./model.js)
// - upload ---> Objeto del Modulo multer para gestion de archivos. 
module.exports = (router, Property, upload) => {
  require('./create')(router, Property, upload)
  require('./find')(router, Property)
  require('./update')(router, Property, upload)
  require('./delete')(router, Property)
}
