function Tree(val, left, right) {
  this.left = left
  this.right = right
  this.val = val
}

/* wgłąb
Tree.prototype[Symbol.iterator] = function* () {
  yield this.val
  if (this.left) yield* this.left
  if (this.right) yield* this.right
}
*/

//wszerz z yield
Tree.prototype[Symbol.iterator] = function* () {
  var q = [this]
  while (q.length > 0) {
    if (q[0].left) q.push(q[0].left)
    if (q[0].right) q.push(q[0].right)

    r = q[0].val
    q.splice(0, 1)
    yield r
  }
}


var root = new Tree(1, new Tree(2, new Tree(3)), new Tree(4))

for (var e of root)
  console.log(e)


console.log("");

//wszerz z next
function makeIterator(t) {
  var q = [t]
  return {
    [Symbol.iterator]() {
        return this;
    },
    next: function () {
      if (q.length > 0) {
        r = q[0].val
        if (q[0].left) q.push(q[0].left)
        if (q[0].right) q.push(q[0].right)
        q.splice(0, 1)
        return {
            value: r,
            done: 0,
          }
      }
      return {
        value: undefined,
        done: true,
      }
    },
  }
}

var it = makeIterator(root)
//console.log(...it)

for (var e of it)
  console.log(e)

