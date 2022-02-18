//Ad1. Generalnie oba sposoby (notacja z kropką i nawiasowa) są poprawne i działają tak samo.
//Jendakże w notacji z kropką nie jest możliwe uzyskanie dostępu do składowej, której nazwa zaczyna się od liczby lub, w której występuje spacja,
//zaś w notacji nawiasowej, aby uzyskać dotęp do składowej korzystamy z stringa, który może mieć spację lub zaczynać się od liczby.
//Przykład:

const ob = {
skladowa: 1.0,
2: "pole2",
"pole numer 3": ["K", " ", "T"],
ostatnie: "END",
}

console.log(ob.skladowa === ob["skladowa"]) //true
// console.log(ob.2) //problem
console.log(ob["2"]) //to działa
console.log(ob["pole numer 3"]) //to działa, a to: console.log(ob.pole numer 3) nie

//Ad2. Użycie innego niż string argumentu dla [] powoduje próbe jego konwersji na typ string.
//Przykład:

const ob = {
    skladowa: 1.0,
    2: "pole2",
    "pole numer 3": ["K", " ", "T"],
    true: "END",
}

console.log(ob[2], " ", ob[115]); // -> pole2   undefined
console.log(ob[new Boolean(1)], " ", ob[new Number(223)]); // -> END   undefined
ob[new Number(223)] = "teraz OK";
console.log(ob[new Boolean(1)], " ", ob[new Number(223)]); // -> END   teraz OK
console.log(ob[{}]); // -> undefined
ob[{}] = ["blank", "slate", 17];
console.log(ob[{}]); // -> (3) ['blank', 'slate', 17]

//Liczba jest automatycznie konwertowana przez wbudowane funckje, więc programista ma niewielki wpływ na to jak zostanie zamieniona na stringa.
//W przypadku obiektów używana jest metoda toString, którą można dowolnie edytować dla każdego obiektu.

//Ad.3 Jeśli napis da się przekonwertować na liczbę to jest to robione.
//Podobnie z obiektem.
//Nowe klucze są dopisywane na koniec tablicy traktowane tak jak składowe w obiekcie.
//Można ustawiać wartość length na dowolną wartość.
//Jeśli jest mniejsza niż długość tablicy to jest ona ucinana do zadanej długości, a jeśli jest większa to tworzone są nowe undefined komórki tablicy.
//Przykład:

const tab = [1, 2, 3, 4, 5, "6", "7", "8", "9"]

console.log(tab["one"], " ", tab["6"]); // -> undefined   7
console.log(tab["0"], " ", tab["kot"]); // -> 1   undefined

console.log(tab[true], " ", tab[new String("2")]); // -> undefined   3
console.log(tab[+!+[]], " ", tab[new Number(123)]); // -> 2   undefined

tab["kot"] = 13;
tab["one"] = "jedyneczka";

console.log(tab["kot"], " ", tab["one"]); // -> 13   jedyneczka

console.log(Object.keys(tab)); // -> (12) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'kot', 'one']

tab.length = 3;
console.log(tab.length); // -> 3
console.log(tab); // -> (3) [1, 2, 3, kot: 13, one: 'jedyneczka']

tab.length = 177;
console.log(tab); // -> (177) [1, 2, 3, …, kot: 13, one: 'jedyneczka']
console.log(tab[56]); // -> undefined





