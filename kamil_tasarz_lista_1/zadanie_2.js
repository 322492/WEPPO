function fun(x) {
  var s = new Number(0);
  var n = new Number(x);
  x = x.toString()
  while (x.length > 0) {
    var last = parseInt(x.slice(-1))
    s += last
    x = x.slice(0, -1)
    if (last) {
      if (n % last != 0) return false
    }
  }
  return n % s == 0
}

for (let i = 1; i <= 100000; i++) {
  if (fun(i)) console.log(i)
}
