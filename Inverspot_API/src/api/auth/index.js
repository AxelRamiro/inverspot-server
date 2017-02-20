module.exports = (router, User, jwt, config, sendMail) => {
  require('./authenticate')(router, User, jwt, config)
  require('./verify')(router, User, jwt, config)
  require('./recovery')(router, User, sendMail)
}
