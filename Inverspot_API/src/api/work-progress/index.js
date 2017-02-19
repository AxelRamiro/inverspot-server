module.exports = (router, WorkProgress) => {
  require('./create')(router, WorkProgress)
  require('./find')(router, WorkProgress)
  require('./update')(router, WorkProgress)
  require('./delete')(router, WorkProgress)
}
