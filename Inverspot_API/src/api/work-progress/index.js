module.exports = (router, WorkProgress, upload) => {
  require('./create')(router, WorkProgress, upload)
  require('./find')(router, WorkProgress)
  require('./update')(router, WorkProgress, upload)
  require('./delete')(router, WorkProgress)
}
