const isPrime = (num) => {
  if (num <= 1) return false
  if (num <= 3) return true
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

let limit = 11
let count = 2

while (count <= limit) {
  if (isPrime(count)) console.log(count)
  count++
}
