const organizeInstructors = function(instructors) {
  let web = []
  let iOS = []
  let block = []
   

  for (const instructor of instructors) {
    if (instructor.course === 'web'){
        web.push(instructor.name)
    } else if (instructor.course === 'iOS'){
      iOS.push(instructor.name)
    } else if (instructor.course === 'blockchain'){
      block.push(instructor.name)
    }
    return instructor.course + ": " + instructor.name
  }
}


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));