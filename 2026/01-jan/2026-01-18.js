// #161
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-18

function getsFreeShipping(cart, minimum) {
  let total = 0
  const items = {
    "shirt": 34.25,
    "jeans": 48.50,
    "shoes": 75.00,
    "hat": 19.95,
    "socks": 15.00,
    "jacket": 109.95
  }

  cart.forEach(item => total += items[item])

  return total >= minimum;
}