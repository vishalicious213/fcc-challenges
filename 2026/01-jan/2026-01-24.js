// #167
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-24

function getBingoLetter(n) {

  if (n < 1 || n > 75) return null

  return n <= 15 ? "B" 
  : n <= 30 ? "I" 
  : n <= 45 ? "N" 
  : n <= 60 ? "G" 
  : n <= 75 ? "O"
  : null
}