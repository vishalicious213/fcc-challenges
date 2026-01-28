// #170
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-27

function oddOrEvenDay(timestamp) {
  // console.log(new Date(timestamp).getUTCDate(), new Date(timestamp).getUTCDate() % 2 === 0 ? "even" : "odd")
  
  return new Date(timestamp).getUTCDate() % 2 === 0 ? "even" : "odd"
}