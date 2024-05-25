// Length of string without using any library function?
let str="Hello, World";

let length=0;
for(let char of str){
    length++
}
console.log(length);


//Write a code for adding new Element dynamically
// example code:

// Create a new list item element
var listItem = document.createElement("li");

// Set text content for the list item
listItem.textContent = "New item";

// Append the list item to the existing unordered list
document.getElementById("myList").appendChild(listItem);


//How can the style/class of an element changed?

// To change the style or class of an element in JavaScript, you can use the style 
// property to directly modify CSS properties or the classList property to add or remove 
// classes.

//example code:
//changing the style directly:
// Get the element
var element = document.getElementById("myElement");

// Change the background color
element.style.backgroundColor = "red";

// Change the font size
element.style.fontSize = "20px";

//adding or removing classes:
// Get the element
var element = document.getElementById("myElement");

// Add a class
element.classList.add("myClass");

// Remove a class
element.classList.remove("anotherClass");

// How to read and write a file using js?
// In web browser env js doesn't have access to the file system due to security reasons
// but we can read and write a file using node
//example:
//Read file
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
// write file:
const fs = require('fs');

const content = 'This is a test file.';

fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
// How can you convert the string of any base to an integer in JavaScript?

// You can convert a string representing a number in any base (ex:- binary, octal, hexadecimal) 
// to an integer in JavaScript using the parseInt() function. The parseInt() function takes two 
// arguments: the string to parse and the base of the numeral system.

//code:
let binaryString = "1010";
let decimalNumber = parseInt(binaryString, 2);
console.log(decimalNumber); // Output: 10

let octalString = "12";
let decimalNum = parseInt(octalString, 8);
console.log(decimalNum); // Output: 10

let hexadecimalString = "FF";
let decimalNumb = parseInt(hexadecimalString, 16);
console.log(decimalNumb); // Output: 255


//  What is the function of the delete operator?

// In JavaScript, the delete operator is used to remove a property from an object. 
// It can also be used to remove an element from an array, although this is not the intended 
// use of the operator for arrays. The delete operator works by freeing up the memory that was 
// allocated for the property or element, effectively removing it from the object or array.

//Deleting a property from an object
let obj = { a: 1, b: 2, c: 3 };
delete obj.b; // Removes property 'b' from the object
console.log(obj); // Output: { a: 1, c: 3 }

//Deleting an element from an array :
let arr = [1, 2, 3, 4];
delete arr[2]; // Removes element at index 2 (leaves a hole in the array)
console.log(arr); // Output: [1, 2, empty, 4]
// not recommended

//types of popup boxex in js?

// In JavaScript, there are three main types of pop-up boxes that you can create 
// using the built-in methods:

// Alert Box: An alert box is used to display a message to the user. It is often used to inform 
// the user about some information or to display a warning. The user must acknowledge the 
// message by clicking "OK" to continue.

alert("This is an alert box!");

// Confirm Box: A confirm box is used to ask the user for confirmation, typically with "OK" 
// and "Cancel" buttons. It returns true if the user clicks "OK" and false if the user 
// clicks "Cancel".

if (confirm("Do you want to proceed?")) {
  // User clicked OK
  console.log("User chose to proceed.");
} else {
  // User clicked Cancel
  console.log("User canceled the action.");
}

// Prompt Box: A prompt box is used to get input from the user. It displays a text box where 
// the user can enter a value. The value entered by the user is returned as a string. 
// If the user clicks "Cancel", the method returns null.

var userInput = prompt("Please enter your name:");
if (userInput !== null) {
    console.log("Hello, " + userInput + "!");
} else {
    console.log("User canceled the prompt.");
}




