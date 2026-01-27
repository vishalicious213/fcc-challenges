// #168
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-25

function scaleImage(size, scale) {
  const dimensions = size.split("x")

  return `${(dimensions[0]) * scale}x${(dimensions[1]) * scale}`
}