const camelCase = function(input) {

let string = input;

  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      string = input.replace(' ' + input[i+1], `${input[i+1]}`.toUpperCase());
      input = string;
    
    }
  }
  return string
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));