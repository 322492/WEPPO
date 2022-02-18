function fib() {
  f0 = 0
  f1 = 1
  cur = f0
  return {
    next: function () {
      f0 = f1
      f1 = cur
      cur = f0 + f1
      return {
        value: cur,
        done: false,
      }
    },
  }
}

var it = fib()
//for (var _result; (_result = it.next()), !_result.done; )
//console.log(_result.value)

 //for ( var i of fib() ) //W tym przypadku iteracja za pomocą for-of nie jest możliwa
  // console.log( i );

function* fibonacci() {
  var fn1 = 0
  var fn2 = 1
  while (true) {
    var current = fn1
    fn1 = fn2
    fn2 = current + fn1
    yield current
  }
}

var _it = fibonacci()
//for (var _result; (_result = _it.next()), !_result.done; )
//console.log(_result.value)

// for ( var i of fibonacci() ) //W przypadku generatora fibonacci() jest możliwa iteracja za pomocą for-of
//   console.log( i );
