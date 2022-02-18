var fs = require('fs')
var util = require('util')

/* // podstawowa funckja fs.readFile
fs.readFile('./t1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
*/

var f = function () {
  fs.readFile('./t1.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
};

function komunikat(callback) {
  callback()
}

komunikat(f);

//sposób 1. Promise
function prom(a, b) {
  return new Promise((resolve, reject) => {
    fs.readFile(a, b, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve(data)
    })
  })
}
prom('./t1.txt', 'utf8').then((r) => {
  console.log(r + ' x2')
})

//sposób 2 util.promisify
var rf = util.promisify(fs.readFile)
rf('./t1.txt', 'utf8').then((r) => {
  console.log(r + ' x3')
})

//sposób 3. fs.promises
fs.promises.readFile('./t1.txt', 'utf8').then((r) => {
  console.log(r + ' x4')
})

// wywołanie 1:
prom('./t1.txt', 'utf8').then((r) => {
  console.log(r + ' - wywołanie 1')
});

// wywołanie 2:
(async function() {
  var data = await fs.promises.readFile('./t1.txt', 'utf8');
  console.log(data + ' - wywołanie 2')
})()

