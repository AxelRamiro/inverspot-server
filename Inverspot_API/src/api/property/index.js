module.exports = (router, Property) => {
  require('./create')(router, Property)
  require('./find')(router, Property)
  require('./update')(router, Property)
  require('./delete')(router, Property)
}
