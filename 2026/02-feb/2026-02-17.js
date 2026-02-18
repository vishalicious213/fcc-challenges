// #191
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-17

function checkEligibility(athleteWeights, sledWeight) {
  console.log(athleteWeights, sledWeight)
  if (athleteWeights.length === 1 && sledWeight >= 162) {
    return 247 >= (athleteWeights[0] + sledWeight) ? "Eligible" : "Not Eligible"
  }

  if (athleteWeights.length === 2 && sledWeight >= 170) {
    return 390 >= (athleteWeights.reduce((total, weight) => total + weight, 0) + sledWeight) ? "Eligible" : "Not Eligible"
  }

  if (athleteWeights.length === 4 && sledWeight >= 210) {
    return 630 >= (athleteWeights.reduce((total, weight) => total + weight, 0) + sledWeight) ? "Eligible" : "Not Eligible"
  }

  return "Not Eligible"
}