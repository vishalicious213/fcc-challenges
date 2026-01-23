// #165
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-22

function getAverageGrade(scores) {
  const average = Math.round(scores.reduce((total, score) => total + score, 0) / scores.length)

  if (average >= 97) return "A+"
  if (average >= 93 && average <= 96) return "A"
  if (average >= 90 && average <= 92) return "A-"
  if (average >= 87 && average <= 89) return "B+"
  if (average >= 83 && average <= 86) return "B"
  if (average >= 80 && average <= 82) return "B-"
  if (average >= 77 && average <= 79) return "C+"
  if (average >= 73 && average <= 76) return "C"
  if (average >= 70 && average <= 72) return "C-"
  if (average >= 67 && average <= 69) return "D+"
  if (average >= 63 && average <= 66) return "D"
  if (average >= 60 && average <= 62) return "D-"
  if (average < 60) return "F"
}