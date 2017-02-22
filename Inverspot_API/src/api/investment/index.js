module.exports = (router, Investment, Property, User, sendMail) => {
  require('./create')(router, Investment, Property, User, sendMail)
  require('./find')(router, Investment)
  require('./update')(router, Investment)
  require('./delete')(router, Investment, Property)
}
