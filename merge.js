const merge = function (a, b) {
  let mergedArr = []

  for (let i = 0; i < b.length; i++) {
    a.push(b[i])
  }

  a.sort()
  return a
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);