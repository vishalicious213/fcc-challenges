// #155
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-12

function getNumberOfPlants(fieldSize, unit, crop) {
  let space = 0
  let wholeFarm = 0

  if (crop === "corn") {space = 1} else
  if (crop === "wheat") {space = .1} else
  if (crop === "soybeans") {space = .5} else
  if (crop === "tomatoes") {space = .25} else
  if (crop === "lettuce") {space = .2}

  if (unit === "acres") {
    wholeFarm = Math.floor((fieldSize * 4046.86) / space)
    console.log("acres", crop, space, fieldSize)
  } else {
    wholeFarm = Math.floor((fieldSize * 10000) / space)
    console.log("hectares", crop, space, fieldSize)
  }

  return wholeFarm
}