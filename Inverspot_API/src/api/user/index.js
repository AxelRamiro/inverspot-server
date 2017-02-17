module.exports = (router, User, sendMail) => {
  require('./create')(router,User, sendMail)
  require('./update')(router,User)
  require('./delete')(router,User)
  require('./find')(router,User)
}
