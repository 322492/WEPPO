function* fib() {
  var fn1 = 0
  var fn2 = 1
  while (true) {
    var current = fn1
    fn1 = fn2
    fn2 = current + fn1
    yield current
  }
}

function* take(it, top) {
  for (let i = 0; i < top; i++) {
    yield it.next().value
  }
}

for (let num of take(fib(), 10)) console.log(num)
