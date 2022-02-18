var mod1 = require('./mod1')

exports.bee = function () {
  if (mod1.foo() == 'foo fun') return 5
  else return 7
}

exports.num = function () {
    if (mod1.par() == 13) return "działa"
    else return "prawie"
}

exports.cykl2 = function () {
    return mod1.cykl1();
}


