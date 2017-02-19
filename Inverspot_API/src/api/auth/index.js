module.exports = (router, User, jwt, config) => {
  require('./authenticate')(router, User,jwt,config)
  require('./verify')(router, User,jwt,config)
}
