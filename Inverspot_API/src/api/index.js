module.exports = (router,mongoose,bcrypt,jwt,config) => {
  // Models
  const User = require('./user/model')(mongoose,bcrypt)
  // /Models

  // Routers
  require('./user')(router,User)
  require('./auth')(router, User, jwt,config)
  // /Routers
}
