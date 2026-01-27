// #169
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-26

function fizzBuzzMini(n) {

  return n % 15 === 0 ? "FizzBuzz"
  : n % 5 === 0 ? "Buzz"
  : n % 3 === 0 ? "Fizz"
  : n.toString()
}