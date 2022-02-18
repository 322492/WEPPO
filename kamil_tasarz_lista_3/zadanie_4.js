function createFs(n) {
    // tworzy tablice n funkcji
    var fs = [] // i-ta funkcja z tablicy ma zwrócic i
    for (var i = 0; i < n; i++) {
      fs[i] = function () {
        return i
      }
    }
    console.log(i)
    return fs
  }
  
  // var i = 0 tworzy zmienną o zasięgu funkcyjnym, podczas każdego obrotu for'a tworzymy funkcję, która zwraca wartość i,
  // Jednakże wartośći zmienia się podczas każdego obrotu i na koniec jest równa 10, dlatego wszystkie funkcje zwracają 10.
  // A na przykład w siódmym obrocie pętli wszystkie utworzone funkcje zwracają wartość i = 6
  
  // Zamiana var na let powoduje, że zmienna i ma zasięg blokowy.
  // Czyli utworzona funckja zwraca wartość i, która istnieje w danym obrocie pętli i nie jest nadpisywana za każdą kolejną iteracją.
  
  function create_better(n) {
    // tworzy tablice n funkcji
    var fs = [] // i-ta funkcja z tablicy ma zwrócic i
    for (var i = 0; i < n; i++) {
      fs[i] = (function () {
        let c = i
        return function () {
          return c
        }
      })()
    }
    return fs
  }
  
  var myfs = create_better(10)
  console.log(myfs[0]()) // zerowa funkcja miała zwrócic 0 i zwraca
  console.log(myfs[2]()) // druga miała zwrócic 2 i też działa
  console.log(myfs[7]())
  