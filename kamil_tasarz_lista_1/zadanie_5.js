function Fib_iter(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  var p = 0
  var a = 1
  for (let i = 2; i <= n; i++) {
    var s = p + a
    p = a
    a = s
  }
  return a
}

/* // wersja iteracyjna na BigInt dla dużych n
function Fib_iter(n) {
    if (n == 0) return 0
    if (n == 1) return 1
    var p = BigInt(0);
    var a = BigInt(1);
    for (let i = 2; i <= n; i++) {
      var s = BigInt(p + a);
      p = a
      a = s
    }
    return a
  }
*/

function Fib_rek(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  return Fib_rek(n - 1) + Fib_rek(n - 2)
}

console.time('iter 100')
for (let i = 0; i <= 100; i++) var f = Fib_iter(i)
console.timeEnd('iter 100')

console.time('recur 40')
for (let i = 0; i <= 40; i++) var f = Fib_rek(i)
console.timeEnd('recur 40')

/*
Zgodnie z treścia zadania uruchomiłem powyższy kod również w przeglądarkach Google Chrome i Microsoft Edge.
Zarówno dla algorytmu iteracyjnego jak i rekurencyjnego rząd wielkości czasu potrzebnego na jego wykonanie nie zmienia się.
Jednakże dla obu wersji przeglądarek algorytm rekurencyjny dla n = 40 jest wolniejszy o około 0.5-1 sekundę (w skali trwania około 3-4 sekund),
ale jeśli zwiększymy n=45 wtedy obie przeglądarki prezentują zbliżone wyniki wolniejsze (od uruchomienia VSC + node.js) o około 5-10 sekund (w skali wykonania około 40 sekund).
*/
