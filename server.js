const express = require('express')
const path = require('path')

const httpPort = 8080

const app = express()

app.use(express.static(path.join(__dirname, 'product-card')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'product-card/index.html'))
})

app.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})