var obiekt = {
  pole1: 17,
  nazwa: 'kropka',
  funny() {
    console.log(':))')
  },

  get val() {
    return obiekt.pole1
  },

  set baz(a) {
    obiekt.pole1 = a
  },
}

// Pokaz dodawania pola:
obiekt['pole2'] = 89
obiekt.pole3 = 76

// Pokaz dodawania metody:
obiekt['fun2'] = function (a, b) {
  console.log(a + b)
}

obiekt.prop = function () {
  console.log(Object.keys(obiekt))
}

// Pokaz dodawania gettera i settera
Object.defineProperty(obiekt, 'qux', {
  get: function () {
    return 15
  },
})

Object.defineProperty(obiekt, 'baza', {
  set: function (p) {
    return this.nazwa = p;
  },
})

/*
Do istniejącego obiektu można dodawać pola/metody za pomocą zwykłej składni (operatora . lub
[]). Dodanie do istniejącego obiektu właściwości (get/set) jest możliwe tylko przy użyciu Object.defineProperty.
*/

obiekt.prop();