'use strict'
// dependencies
const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const jwtMiddleware = require('express-jwt')
// /dependencies
const router = express.Router()
const app = express()
mongoose.connect(config.db.dbUri)

app.set('port', process.env.PORT || config.server.port)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '2mb'}))
app.use(morgan('dev'))

const authenticate = jwtMiddleware({
  secret: config.auth.secret,
  getToken: (req) => {
   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
       return req.headers.authorization.split(' ')[1];
   } else if (req.query && req.query.token) {
     return req.query.token;
   }
   return null;
 }
}).unless({path: ['/api/auth']})

app.get ('/', (req,res) => {
  res.send ('Hello Word!!')
})

//Router
require('./src/api')(router,mongoose,bcrypt,jwt,config)
app.use('/api', authenticate, router)
//  /Router

app.listen (app.get ('port'), (err) => {
  console.log (`Server running on port ${app.get("port")}`)
})

// Event Database
mongoose.connection.on ('connected',() => {
  console.log(`--> Database coneccted`)
})
mongoose.connection.on ('error', () => {
  console.log(`--> ERROR in database connect`)
})
mongoose.connection.on ('disconnected', () => {
  console.log(`--> Database disconnected`)
})
// /Event Database
