function prime(x) {
  if (x == 2) return true
  for (let i = 2; i <= Math.sqrt(x); i++) if (!(x % i)) return false

  return true
}

for (let i = 2; i <= 100000; i++) {
  if (prime(i)) console.log(i)
}
