var http = require('http')

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=plikKT.txt')
    res.write('Treść pliku KT')
    res.end()
}).listen(3110)

console.log('Server started!')
