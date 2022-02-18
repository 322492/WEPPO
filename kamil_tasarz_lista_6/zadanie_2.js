var http = require('http')
var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {

  var checkbox1 = {
    name: 'checkbox1',
    options: [
      {text: 'opcja 1' },
      {text: 'opcja 2' },
      {text: 'opcja 3' },
    ],
  }

  var checkbox2 = {
    name: 'checkbox2',
    options: [
      {text: 'opcja 4' },
      {text: 'opcja 5' },
      {text: 'opcja 6' },
    ],
  }
  res.render('index2', { checkbox1, checkbox2 })
})
http.createServer(app).listen(3000)
