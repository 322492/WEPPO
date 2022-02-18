function createBetterGenerator(p) {
  var _state = 0
  return function createGenerator() {
    return {
      next: function () {
        return {
          value: _state,
          done: _state++ >= p,
        }
      },
    }
  }
}

var foo = {
  [Symbol.iterator]: createBetterGenerator(5),
}

var foo1 = {
  [Symbol.iterator]: createBetterGenerator(1),
}

var foo3 = {
  [Symbol.iterator]: createBetterGenerator(77),
}

var foo2 = {
    [Symbol.iterator]: createBetterGenerator(-5),
  }

for (var f of foo1) console.log(f)
