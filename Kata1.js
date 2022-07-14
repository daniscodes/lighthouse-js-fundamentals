const sumLargestNumbers = function (array) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > a) {
      b = a
      a = array[i]
    }
  }


  return a + b
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));