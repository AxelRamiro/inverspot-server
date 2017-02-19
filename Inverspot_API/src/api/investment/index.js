module.exports = (router, Investment) => {
  require('./create')(router, Investment)
  require('./find')(router, Investment)
  require('./update')(router, Investment)
  require('./delete')(router, Investment)
}
