var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('inside / route')
  res.end('working!')
})

app.get('/test', function (req, res) {
  console.log('inside /test route')
  res.end('test succesfull')
})

app.listen(9000, function () {
  console.log('listening on port 9090')
}).on('connect', function (req) {
  console.log('connected succesfully!')
})