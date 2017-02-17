module.exports = (router, User) => {
  require('./create')(router,User)
  require('./update')(router,User)
}
