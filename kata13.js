const talkingCalendar = function (date) {
  const array = date.split('')

  const month = []
  month.push(array[5], array[6])
  let monthString = month.join("")

  const day = []
  day.push(array[8], array[9])
  let dayString = day.join("")

  const year = []
  year.push(array[0], array[1], array[2], array[3])
  let yearString = year.join("");

  switch (monthString) {
    case '01':
      monthString = 'January'
      break;
    case '02':
      monthString = 'February'
      break;
    case '03':
      monthString = 'March'
      break;
    case '04':
      monthString = 'April'
      break;
    case '05':
      monthString = 'May'
      break;
    case '06':
      monthString = 'June'
      break;
    case '07':
      monthString = 'July'
      break;
    case '08':
      monthString = 'August'
      break;
    case '09':
      monthString = 'September'
      break;
    case '10':
      monthString = 'October'
      break;
    case '11':
      monthString = 'November'
      break;
    case '12':
      monthString = 'December'
      break;
    default:
      return "error"
  }

  if (array[9] === '1') {
    dayString = dayString + 'st'
  } else if (array[9] === '2') {
    dayString = dayString + 'nd'
  } else if (array[9] === '3') {
    dayString = dayString + 'rd'
  } else
    dayString = dayString + 'th'

  let phrase = monthString + " " + dayString + " " + yearString
  return phrase
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));