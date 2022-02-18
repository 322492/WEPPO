(function () {
  const readLine = require('readline')
  const f = require('fs')
  var file = './logi.txt'

  var rl = readLine.createInterface({
    input: f.createReadStream(file),
    output: process.stdout,
    terminal: false,
  })

  var ip = function (text) {
    // znajdowanie numeru ip w linijce - szukam pierwszej wielkiej litery, jest ona początkiem rodzaju żadania
    // na pozycji wcześniej kończy się numer ip, a zaczyna się on na pozycji 6
    var w = text.search(new RegExp('[A-Z]'))
    return text.slice(9, w - 1)
  }

  var arr = {}
  rl.on('line', function (text) {
    var cur = ip(text)
    if (arr[cur]) arr[cur]++
    else arr[cur] = 1
  })
  rl.on('close', function () {
    var ips = [0, 0, 0]
    var vals = [0, 0, 0]

    for (const p in arr) {
      if (arr[p] > vals[0]) {
        vals[2] = vals[1]
        vals[1] = vals[0]
        vals[0] = arr[p]
        ips[2] = ips[1]
        ips[1] = ips[0]
        ips[0] = p
      } else if (arr[p] > vals[1]) {
        vals[2] = vals[1]
        vals[1] = arr[p]
        ips[2] = ips[1]
        ips[1] = p
      } else if (arr[p] > vals[2]) {
        vals[2] = arr[p]
        ips[2] = p
      }
    }

    console.log(ips[0] + ' ' + vals[0])
    console.log(ips[1] + ' ' + vals[1])
    console.log(ips[2] + ' ' + vals[2])
  })
})()
