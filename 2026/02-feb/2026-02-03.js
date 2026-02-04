// #177
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-03

function mirror(str) {
  // make a variable to hold the reversed string
  // turn string into array
  // reverse the array
  // combine the array elements back into a string
  // return the string + the reverse
  
  // let reversed = str.split("").reverse().join("")
  // return str+reversed;
  return str+str.split("").reverse().join("");
}