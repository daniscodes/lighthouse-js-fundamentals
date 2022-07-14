const instructorWithLongestName = function (instructors) {
  var longestString = instructors[0];

  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i]["name"].length > longestString["name"].length) {
      longestString = instructors[i]
    }
  };
  return longestString;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));