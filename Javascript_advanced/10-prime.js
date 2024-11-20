function countPrimeNumbers() {
  let count = 0
  for (let i = 2; i <= 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count++;
    }
  }
  return count;
}

let start = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);