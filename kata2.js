const conditionalSum = function (values, condition) {

  let evenSum = 0
  const even = []
  let oddSum = 0
  const odd = []

  if (condition === "even") {
    for (num of values) {
      if (num % 2 === 0) {
        even.push(num)
      }
    }
      for (let i = 0; i < even.length; i++) {
        evenSum += even[i]
      }
   return evenSum 
  }

  if (condition === "odd") {
    for (num of values) {
      if (num % 2 !== 0) {
        odd.push(num)
      }
    }
      for (let i = 0; i < odd.length; i++) {
        oddSum += odd[i]
      }
    return oddSum
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));