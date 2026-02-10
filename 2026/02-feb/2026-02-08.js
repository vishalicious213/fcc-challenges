// #182
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-08


function calculatePenaltyDistance(rounds) {
  return rounds
    .map(round => (5 - parseInt(round)) * 150)
    .reduce((total, curr) => total + curr, 0)
}