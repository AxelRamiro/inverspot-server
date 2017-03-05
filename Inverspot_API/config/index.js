let db = require('./db.json')

//URI Database local or cloud
//db.dbUri = `mongodb://${db.dbCloud.user}:${db.dbCloud.password}@${db.dbCloud.address}:${db.dbCloud.port}/${db.dbCloud.database}`
db.dbUri = `mongodb://${db.dbLocal.address}:${db.dbLocal.port}/${db.dbLocal.database}`

module.exports = {
  server: require('./server.json'),
  db: db,
  auth: require('./auth.json'),
  mailing: require('./mailing'),
  facebook: require('./facebook')
}
