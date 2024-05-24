console.log(typeof '10'); // Output: string
console.log(typeof 10); // Output: number
console.log(typeof '10' === typeof 10); // Output: false  --- === checks the datatype and value both
// So we need to convert the string to number 

let str = '10';
let num = 10;

// Convert the string to a number
let convertedStr = Number(str);

// Check if the converted value is exactly equal to the number
console.log(typeof convertedStr); // Output: number
console.log(convertedStr === num); // Output: true

