var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Say Hello !')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})