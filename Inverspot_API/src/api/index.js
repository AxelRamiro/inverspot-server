module.exports = (router, mongoose, bcrypt, jwt, config, sendMail) => {
  // Models
  const User = require('./user/model')(mongoose, bcrypt)
  const Property = require('./property/model')(mongoose)
  // /Models

  // Routers
  require('./auth')(router, User, jwt, config, sendMail)
  require('./user')(router,User, sendMail)
  require('./property')(router, Property)
  // /Routers
}
