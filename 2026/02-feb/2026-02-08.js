// #182
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-08


function calculatePenaltyDistance(rounds) {
  return rounds
    .map(round => (5 - parseInt(round)) * 150)
    .reduce((total, curr) => total + curr, 0)
}


// single-pass version using .reduce()

function calculatePenaltyDistance(rounds) {
  return rounds.reduce((total, round) => {
    return total + (5 - parseInt(round)) * 150
  }, 0)
}


// tighter .reduce() version

const calculatePenaltyDistance = rounds =>
  rounds.reduce(
    (total, round) => total + (5 - parseInt(round)) * 150,
    0
  )


// .forEach() version, no .reduce() & internal accumulator

function calculatePenaltyDistance(rounds) {
  let total = 0

  rounds.forEach(round => {
    total += (5 - parseInt(round)) * 150
  })

  return total
}
