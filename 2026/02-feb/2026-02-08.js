// #182
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-08

// Initially, we used parseInt() for these examples, but changed to Number() because:
// parseInt() trims whitespace, walks the string char by char, stops parsing at first invalid char & returns what it has so far
// Number() parses entire string, anything invalid = NaN, no partial parsing, less work
// parseInt() can hide bad input, Number() fails loudly & returns a number or NaN


function calculatePenaltyDistance(rounds) {
  return rounds
    .map(round => (5 - Number(round)) * 150)
    .reduce((total, curr) => total + curr, 0)
}


// single-pass version using .reduce()

function calculatePenaltyDistance(rounds) {
  return rounds.reduce((total, round) => {
    return total + (5 - Number(round)) * 150
  }, 0)
}


// tighter .reduce() version

const calculatePenaltyDistance = rounds =>
  rounds.reduce(
    (total, round) => total + (5 - Number(round)) * 150,
    0
  )


// .forEach() version, no .reduce() & internal accumulator

function calculatePenaltyDistance(rounds) {
  let total = 0

  rounds.forEach(round => {
    total += (5 - Number(round)) * 150
  })

  return total
}
