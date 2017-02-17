module.exports = (router, User) => {
  require('./create')(router,User)
  require('./update')(router,User)
  require('./delete')(router,User)
  require('./find')(router,User)
}
