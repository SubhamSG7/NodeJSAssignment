// A conditional statement in programming allows you to execute different code blocks 
// based on whether a specified condition is true or false. In JavaScript, conditional 
// statements help you control the flow of your program by making decisions at runtime.

// Types of Conditional Statements in JavaScript
// if Statement
// if...else Statement
// switch Statement
// Ternary Operator

//Examples:

//if
var age = 18;

if (age >= 18) {
  console.log('You are an adult.');
}

// if...else Statement
var age = 16;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are not an adult.');
}

// Switch Statement:

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday

// Ternary Operator:

var age = 20;
let status = age >= 18 ? 'adult' : 'minor';

console.log(status); // Output: adult



