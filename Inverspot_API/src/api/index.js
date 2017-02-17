module.exports = (router,mongoose) => {
  // Models
  const User = require('./user/model')(mongoose)
  // /Models
  
  // Routers
  require('./user')(router,User)
  // /Routers
}
