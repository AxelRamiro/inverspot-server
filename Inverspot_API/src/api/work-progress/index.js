// Se inyectan los recursos que necesita cada endpoint para funcionar
// - router ---> Router de expres, express.Router()
// - WorkProgress ---> Schema de mongoose para avance de obra extraido de (./model.js)
// - upload ---> Objeto del Modulo multer para gestion de archivos. 
module.exports = (router, WorkProgress, upload) => {
  require('./create')(router, WorkProgress, upload)
  require('./find')(router, WorkProgress)
  require('./update')(router, WorkProgress, upload)
  require('./delete')(router, WorkProgress)
}
