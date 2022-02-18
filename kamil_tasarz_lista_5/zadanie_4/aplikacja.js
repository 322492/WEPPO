var http = require('http')
var express = require('express')
var url = require('url')
var utils = require('./utils.js')

var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  var imie = req.body.imie
  var nazwisko = req.body.nazwisko
  var przedmiot = req.body.przedmiot

  if (imie == '' || nazwisko == '' || przedmiot == '') res.render('index')
  else {
    var punkty = {
      1: req.body.zad1,
      2: req.body.zad2,
      3: req.body.zad3,
      4: req.body.zad4,
      5: req.body.zad5,
      6: req.body.zad6,
      7: req.body.zad7,
      8: req.body.zad8,
      9: req.body.zad9,
      10: req.body.zad10,
    }
    for (var i = 1; i <= 10; i++) {
      if (punkty[i] == '') {
        punkty[i] = 0
      }
    }

    res.redirect(
      url.format({
        pathname: 'print',
        query: {
          imie: imie,
          nazwisko: nazwisko,
          przedmiot: przedmiot,
          punkty: utils.zakoduj(punkty),
        },
      }),
    )
  }
})

app.get('/print', (req, res) => {
  var imie = req.query.imie
  var nazwisko = req.query.nazwisko
  var przedmiot = req.query.przedmiot
  var punkty = utils.zdekoduj(req.query.punkty)
  res.render('wydruk', {
    imie: imie,
    nazwisko: nazwisko,
    przedmiot: przedmiot,
    punkty: punkty,
  })
})

http.createServer(app).listen(3000)
