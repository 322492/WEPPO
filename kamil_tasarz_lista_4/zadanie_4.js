console.log('Jak masz na imię?')
var n
process.stdin.once('data', (n) => {
  console.log('Witaj ' + n.toString())
  process.exit()
})
