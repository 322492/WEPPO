//Użyłem KeyStore Explorera do wygenerowania certyfikatu.
//Za pomocą poniższego kodu otworzyłem zabezpieczoną witrynę w przeglądarce. 

var fs = require('fs')
var https = require('https')
;(async function () {
  var pfx = await fs.promises.readFile('testkey.pfx')
  var server = https.createServer(
    {
      pfx: pfx,
      passphrase: '12345',
    },
    (req, res) => {
      res.setHeader('Content-type', 'text/html; charset=utf-8')
      res.end(`Welcome to my HTTPS server! Now it's  ${new Date()}`)
    },
  )
  server.listen(3210)
  console.log('started')
})()
