// #183
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-09

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  const competitorScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0]
  .sort((a, b) => b - a)
//   console.log(competitorScores)

  const yourScore = distancePoints + stylePoints + windComp + kPointBonus
//   console.log(yourScore)
  
  if (yourScore >= competitorScores[0]) return "Gold"
  if (yourScore >= competitorScores[1]) return "Silver"
  if (yourScore >= competitorScores[2]) return "Bronze"
  
  return "No Medal"
}