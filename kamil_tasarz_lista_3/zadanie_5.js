function sum(...a) {
    var r = 0;
    for(var i = 0; i<a.length; i++){
        r += a[i]
    }
    return r;
}

console.log(sum())
console.log(sum(1, 2, 3))
// 6
console.log(sum(1, 2, 3, 4, 5))
// 15
