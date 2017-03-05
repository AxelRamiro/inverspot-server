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
const multer = require('multer');
const path = require('path');
const uuid = require('uuid')
const passport = require('passport')
// /dependencies
const router = express.Router()
const app = express()
// Database config
mongoose.Promise = Promise
mongoose.connect(config.db.dbUri)
mongoose.set('debug', config.db.debug);
//  /Database config

// Server config
app.set('port', process.env.PORT || config.server.port)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '2mb'}))
app.use(morgan('dev'))
app.use(passport.initialize())
// Sirve carpeta estática para documentación de API
app.use(`${config.server.apidocUrl}`, express.static('apidoc'))
// / Server config

// Authenticate config
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
// Rutas que no requieren autenticarse
  path: [
    '/api/auth',
    /^\/api\/auth\/.*/, // -----> Quit authenticate path /api/auth/...
    {
      url: '/api/property',
      methods: ['GET']  // -----> unique method
    },
    {
      url: '/api/user',
      methods: ['GET']
    },{
      url: '/api/work-progress',
      methods: ['GET']
    }]
  })
// Middleware error authenticate
const errorAuthenticate = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') res.status(401).send('Invalid token...')
}
// / Authenticate config

// Update File Configurate
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Configuración de locación de los documentos que se suban por la API
    cb (null, config.server.uploadPath)
  },
  filename: (req, file, cb) => {
    // Rename file
    cb (null,  `${uuid.v4()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({ storage: storage })
// /Update File Configurate

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})


app.get ('/', (req,res) => {
  res.status(200).send('Bienvenido a Inverspot API')
})
// Init module Mailing
const sendMail = require('./src/mailing')(config)

//Router
require('./src/api')(router, mongoose, bcrypt, jwt, config, sendMail, upload, passport)
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
