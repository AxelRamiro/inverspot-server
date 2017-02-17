module.exports = (router,mongoose,bcrypt,jwt,config,sendMail) => {
  // Models
  const User = require('./user/model')(mongoose,bcrypt)
  // /Models

  // Routers
  router.use
  require('./user')(router,User,sendMail)
  require('./auth')(router, User, jwt,config,sendMail)
  // /Routers
}
