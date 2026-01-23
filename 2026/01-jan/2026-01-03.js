// #146
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-03

function findLeftHandedSeats(table) {
  const top = table[0]
  const bottom = table[1]
  let seats = 0

  top.forEach((seat, index) => {
    if (seat === "U" && top[index + 1] != "R") seats++
  })
  console.log("top", top, seats)

  bottom.forEach((seat, index) => {
    if (seat === "U" && bottom[index - 1] != "R") seats++
  })
  console.log("bot", bottom, seats)

  console.log(seats)
  return seats;
}