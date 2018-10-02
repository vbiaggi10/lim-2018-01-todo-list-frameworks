const express = require('express')
const serveStatic = require('serve-static')

const secure = require('express-force-https')

const path = require('path')

const app = express()

app.use(secure)
app.use('/', serveStatic(path.join(__dirname, '/build')))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('Server started on port' + port)