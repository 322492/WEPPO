var mod2 = require('./mod2')

exports.foo = function () {
  return 'foo fun'
}

exports.par = function () {
  return 8 + mod2.bee()
}

exports.cykl1 = function () {
    return mod2.cykl2();
}

