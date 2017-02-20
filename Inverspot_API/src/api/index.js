module.exports = (router, mongoose, bcrypt, jwt, config, sendMail) => {
  // Models
  const User = require('./user/model')(mongoose, bcrypt)
  const Property = require('./property/model')(mongoose)
  const Builder = require('./builder/model')(mongoose)
  const Investment = require('./investment/model')(mongoose)
  const WorkProgress = require('./work-progress/model')(mongoose)
  // /Models

  // Routers
  require('./auth')(router, User, jwt, config, sendMail)
  require('./user')(router, User, sendMail)
  require('./property')(router, Property)
  require('./builder')(router, Builder)
  require('./investment')(router, Investment, Property)
  require('./work-progress')(router, WorkProgress)
  // /Routers
}
