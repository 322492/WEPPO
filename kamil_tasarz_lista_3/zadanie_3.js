function forEach(a, f) {
  for (var i = 0; i < a.length; i++) f(a[i])
}
function map(a, f) {
  var r = []
  for (var i = 0; i < a.length; i++) r[i] = f(a[i])
  return r
}
function filter(a, f) {
  var r = []
  for (var i = 0; i < a.length; i++) if (f(a[i])) r.push(a[i])
  return r
}

var a = [1, 2, 3, 4]
forEach(a, (_) => {
  console.log(_)
})
// [1,2,3,4]

console.log(filter(a, (_) => _ < 3))
// [1,2]

console.log(map(a, (_) => _ * 2))
// [2,4,6,8]
