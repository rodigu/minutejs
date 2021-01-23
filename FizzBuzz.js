function FizzBuzz (n = 100) {
  for (let counter = 1; counter <= n; counter++) {
    let fb
    if (counter%15 === 0) {
      fb = "FizzBuzz"
    } else if (counter%5 === 0) {
      fb = "Buzz"
    } else if (counter%3 === 0) {
      fb = "Fizz"
    } else { fb = counter.toString() }
    console.log(counter.toString() + ': ' + fb)
  }
}
