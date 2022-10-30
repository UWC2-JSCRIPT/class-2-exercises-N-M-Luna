// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const Nathalie = {
  firstName: "Nathalie",
  lastName: "Luna Rivera",
  'favorite food': "Licorice",
  bestFriend: {
    firstName: "Princess",
    lastName: "Chavez",
    'favorite food': "Tacos"
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log(`Problems 1-2.`)
console.log(`My favorite food is ${Nathalie['favorite food']}.`)
console.log(`My best friend's name is ${Nathalie.bestFriend.firstName}.
`)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const board = [
  ['-', 'O', '-'],
  ['-', 'X', 'O'],
  ['X', '-', 'X']
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
board[0][2] = 'O'

// 5. Log the grid to the console.
console.log(`Problems 3-5.`)
console.log(`This is the current status of the game:`)

// Loop through each row (board[0], board[1], and board[2])
for (let row = 0; row < 3; row++) {
  // In each row, print each of the three tic-tac-toe [squares] separated by a space
  console.log(`[${board[row][0]}] [${board[row][1]}] [${board[row][2]}]`)
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const IsEmail = myEmail => {
  // Address pattern [Nat Note]: If there's a period before the @, it doesn't catch any substring before it.
  const regex = /\w+@\w+[.]\w+/

  // Print the test result and return the appropriate boolean.
  if (regex.test(myEmail)) {
    console.log(`The string ${myEmail} is an e-mail address.`)
    return true
  } else {
    console.log(`The string ${myEmail} is not an e-mail address.`)
    return false
  }
}

console.log(`Problem 6.`)
const testEmail = `nat.luna.64@gmail.com`
const testResult = IsEmail(testEmail)

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
let dueDate
const StringToDate = str => {

  //Split the date into year, month index, and day.
  const datePart = str.split(`/`)
  const year = datePart[2]
  const monthIndex = datePart[0] - 1
  const day = datePart[1]

  //Create the Date object with the year, month index, and day
  const returnDate = new Date(year, monthIndex, day)
  console.log(`String is '${str}'.`)
  console.log(`Date is ${returnDate}.`)

  // 8. Create a new Date instance to represent the dueDate.
  // This will be exactly 7 days after the assignment date.
  const sevenDaysLater = parseInt(day) + 7
  dueDate = new Date(year, monthIndex, sevenDaysLater)
  console.log(`And the due Date is ${dueDate}.`)
  return returnDate
}

console.log(`Problems 7-8.`)
const assignmentDateStr = '1/21/2019'
const assignmentDate = StringToDate(assignmentDateStr)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help.
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function BuildTimeTag(myDate) {
  // Get strings for year, month, and day
  const year = myDate.getFullYear() // YYYY
  const mIndex = myDate.getMonth() // M or MM
  const month = months[mIndex] // "month"
  const day = myDate.getDate() // D or DD

  // Get 2-digit "numbers" for month and day
  const monthNum = parseInt(mIndex) + 1
  const dayNum = parseInt(day)
  const mm =  MakeTwoDigits(monthNum)
  const dd = MakeTwoDigits(dayNum)

  // Build the time tag
  const timeTag = `<time datetime="${year}-${mm}-${dd}">${month} ${day}, ${year}</time>`
  // 10. log this value using console.log
  console.log(timeTag)
  return timeTag
}

function MakeTwoDigits(num){
  const str = num.toString()
  let twoDigitNum = str
  if (str.length < 2) {
    twoDigitNum = `0${str}`
  }
  return twoDigitNum
}

console.log(`Problems 9-10.
  Here is a time tag with the due date for the assignment.`)
BuildTimeTag(dueDate)
