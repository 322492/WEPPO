//wersja z memoizacją

function fib(n) {
  if (n > 1) return fib(n - 1) + fib(n - 2)
  if (n == 0) return 0
  return 1
}

function memoize(f) {
  var cache = {}
  return function (n) {
    if (cache[n] === undefined) cache[n] = f(n)
    return cache[n]
  }
}

var fib = memoize(fib)

//wersja iteracyjna
function fib_iter(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  var p = 0
  var a = 1
  for (let i = 2; i <= n; i++) {
    var s = p + a
    p = a
    a = s
  }
  return a
}

console.time('iter 1000')
for (let i = 0; i <= 1000; i++) var f = fib_iter(i)
console.timeEnd('iter 1000')

console.time('memo 1000')
for (let i = 0; i <= 1000; i++) var f = fib(i)
console.timeEnd('memo 1000')

// Wersja iteracyjna jest dłuższa niż wersja z użyciem memoizacji