const numberOfVowels = function(word) {

let number = [];
  for (const vowel of word){
    if (vowel === 'a' || vowel === 'i' || vowel === 'e' || vowel === 'o' || vowel === 'u'){
      number.push(vowel)
    }
  }
  return number.length
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));