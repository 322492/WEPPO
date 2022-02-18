var mod1 = require('./mod1');
var mod2 = require('./mod2');

console.log(mod1.foo())
console.log(mod2.bee())
console.log(mod1.par())
console.log(mod2.num())

// console.log(mod1.cykl1()) //Cykl nieskończony - Uncaught RangeError: Maximum call stack size exceeded
