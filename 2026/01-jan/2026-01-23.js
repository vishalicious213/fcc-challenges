// #166
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-23

// Parameters: taking in a string
//    Starts with #
//    3 or 6 chars
// Returns: Boolean

function isValidHex(str) {
  const hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"]

  if (str.length != 4 && str.length != 7 || str[0] != "#") return false

  // split string into array
  // compare each char & see if its in hexChars

  return str.toLowerCase().slice(1).split("").every(char => hexChars.includes(char));
}