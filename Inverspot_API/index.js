'use strict'

const express = require('express')
const config = require('./config')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(config.db.dbUri)

app.set ('port', process.env.PORT || config.server.port)

app.get ('/', (req,res) => {
  res.send ('Hello Word!!')
})

app.listen (app.get ('port'), (err) => {
  console.log (`Server running on port ${app.get("port")}`)
})

// Event Database
mongoose.connection.on ('connected',() => {
  console.log(`--> Database coneccted`)
})
mongoose.connection.on ('error', () => {
  console.log(`--> EROR in database connect`)
})
mongoose.connection.on ('disconnected', () => {
  console.log(`--> Database disconnected`)
})
// /Event Database
