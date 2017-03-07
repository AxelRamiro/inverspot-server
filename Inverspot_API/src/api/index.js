// En este index se centraliza toda los endponts divididos por CRUDs, se inyecta a cada uno lo que requiere e inicia los schemas de datos para manejar la Base de Datos.
// - router ---> Router de expres, express.Router()
// - mongoose ---> Objeto del mudulo mongoose, modelador de objetos para mMongoDB.
// - bcrypt --->  Modulo bcryptjs.
// - jwt ---> Modulo jsonwebtoken.
// - config ---> Configuraciones del API, (../../config/index.js)
// - sendMail ---> Funcion para envio de emails (../mailing/index.js)
// - upload ---> Objeto del Modulo multer para gestion de archivos.
// - passport ---> Modulo passport para inicio con facebook.
module.exports = (router, mongoose, bcrypt, jwt, config, sendMail, upload, passport) => {
  // Models
  const User = require('./user/model')(mongoose, bcrypt)
  const Property = require('./property/model')(mongoose)
  const Builder = require('./builder/model')(mongoose)
  const Investment = require('./investment/model')(mongoose)
  const WorkProgress = require('./work-progress/model')(mongoose)
  // /Models

  // Routers
  require('./auth')(router, User, jwt, config, sendMail, passport)
  require('./user')(router, User, sendMail)
  require('./property')(router, Property, upload)
  require('./builder')(router, Builder)
  require('./investment')(router, Investment, Property, User, sendMail)
  require('./work-progress')(router, WorkProgress, upload)
  // /Routers
}
