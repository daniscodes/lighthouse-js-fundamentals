const multiplicationTable = function(maxValue) {
  let numbers = '';

    for (let i = 1; i <= maxValue; i++){
        for(let j = 0; j < maxValue; j++){

          numbers += i + (j * i) + ' ';
        }
       numbers += '\n'
    }
    return numbers;
  };

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));