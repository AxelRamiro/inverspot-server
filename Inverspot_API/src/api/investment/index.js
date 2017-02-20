module.exports = (router, Investment, Property) => {
  require('./create')(router, Investment, Property)
  require('./find')(router, Investment)
  require('./update')(router, Investment)
  require('./delete')(router, Investment)
}
