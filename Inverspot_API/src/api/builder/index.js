module.exports = (router, Builder) => {
  require('./create')(router, Builder)
  require('./find')(router, Builder)
  require('./update')(router, Builder)
  require('./delete')(router, Builder)
}
