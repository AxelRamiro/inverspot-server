module.exports = (router, User, jwt, config, sendMail, passport) => {
  require('./authenticate')(router, User, jwt, config)
  require('./verify')(router, User, jwt, config, sendMail)
  require('./recovery')(router, User, sendMail)
  require('./signup')(router, User, sendMail)
  require('./facebook')(router, User, jwt, config, passport)
}
