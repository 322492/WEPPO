var http = require('http')
var express = require('express')
var multer = require('multer')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/user_upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

app.get('/', (req, res) => {
  res.render('index1')
})

var upload = multer({ storage: storage })

app.post('/', upload.single('file'), function (req, res) {
  res.end('File uploaded')
})

http.createServer(app).listen(3000)
