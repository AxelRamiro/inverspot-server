const express = require('express')
const app = express()
const port = 8080

app.set('port', port)

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.listen(app.get('port'), (err) => {
  console.log(`Server running on port ${app.get('port')}`)
})
