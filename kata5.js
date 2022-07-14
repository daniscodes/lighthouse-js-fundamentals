const urlEncode = function(text) {
let trim = text.trim()
let string = ""
let space =  " "

for(let i = 0; i < trim.length; i++){
  if (trim[i] == space){
    string += "%20"
  } else {
    string += trim[i]
  }
}
return string
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener thaforn purple for sure"));