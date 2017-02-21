'use strict'
// dependencies
const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const bcrypt = require('bcryptjs')
const jwtMiddleware = require('express-jwt')
// /dependencies
const router = express.Router()
const app = express()
mongoose.Promise = Promise
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
}).unless({
  path: ['/api/auth',
  /^\/api\/auth\/.*/,
  {
    url: '/api/property',
    methods: ['GET']
  },{
    url: '/api/user',
    methods: ['GET']
  }]})

const errorAuthenticate = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') res.status(401).send('Invalid token...')
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.get ('/', (req,res) => {
  res.send ('Hello Word!!')
})

const sendMail = require('./src/mailing')(config)

//Router
require('./src/api')(router, mongoose, bcrypt, jwt, config, sendMail)
app.use('/api', authenticate, errorAuthenticate, router)
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
