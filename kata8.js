const repeatNumbers = function (data) {
  let num
  let repeat
  let string = []

  data.forEach(element => {
    num = (element[0]).toString();
    repeat = element[1];
    string.push(num.repeat(repeat))
  });

  string = string.toString();
  return string
};

;

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));