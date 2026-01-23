// #150
// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-07

function parseUnorderedList(markdown) {
  // split the string on each \n
  let items = markdown.split("\n")
  console.log(items)

  // remove the -
  let newItems = items.map(item => {
    return item.replaceAll("- ", "").trim()
  })
  console.log(newItems)

  // turn into a list
  let list = `<ul>${newItems.map(item => `<li>${item}</li>`).join("")}</ul>`
  console.log(list)

  return list;
}