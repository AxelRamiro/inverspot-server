'use strict'

const express = require('express')
const config = require('./config')
const app = express()

app.set ('port', config.server.port)

app.get ('/', (req,res) => {
  res.send ('Hello Word!!')
})

app.listen (app.get ('port'), (err) => {
  console.log ("Server running on port ${app.get('port')}")
})
