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
console.log(`Problems 1-2:`)
console.log(`My favorite food is ${Nathalie['favorite food']}.`)
console.log(`My best friend's name is ${Nathalie.bestFriend.firstName}.
`)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const board = [
  ['-','O','-'],
  ['-','X','O'],
  ['X','-','X']
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
board[0][2] = 'O'

// 5. Log the grid to the console.
console.log(`Problems 3-5:`)
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


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';


// 8. Create a new Date instance to represent the dueDate.
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
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


// 10. log this value using console.log
