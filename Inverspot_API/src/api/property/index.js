module.exports = (router, Property, upload) => {
  require('./create')(router, Property, upload)
  require('./find')(router, Property)
  require('./update')(router, Property, upload)
  require('./delete')(router, Property)
}
