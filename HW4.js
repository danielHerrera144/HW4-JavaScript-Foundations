// ============================================================
// JavaScript Foundations Coding Assignment — Solutions
// ============================================================


// -----------------------------------------------
// SECTION 1: Basic Rules and Data Types
// -----------------------------------------------

// Exercise 1: Formatting and Naming (Code Correction)
// Fixed: variable renamed to camelCase, spacing/indentation corrected, semicolon added.
let thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  // code block
}


// Exercise 2: Defining Core Data Types
let greeting = `Hello, world`;  // string using backticks (template string)
let price = 9.99;               // number (float)
let isActive = true;            // boolean (no quotation marks)


// Exercise 3: Single-Line Comments
// currentScore stores the player's most recent score out of 100
let currentScore = 95;


// Exercise 4: Equality Comparison
console.log('100' == 100);   // true  — value equality (loose): "100" coerces to 100
console.log('100' === 100);  // false — strict equality: different types (string vs number)


// -----------------------------------------------
// SECTION 2: Conditionals and Control Flow
// -----------------------------------------------

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule); // "Work day"


// Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied"); // logs this because 16 < 18
}


// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Ready to process"); // both conditions true, so this logs
}


// Exercise 8: For Loop
for (let i = 1; i <= 5; i++) {
  console.log(i); // logs 1, 2, 3, 4, 5
}


// Exercise 9: Loop Control (break)
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break; // exits loop when i reaches 7
  }
  console.log(i); // logs 0 through 6
}


// Exercise 10: Do While Loop (runs at least once)
let counter = 10;
do {
  console.log("Running once");
} while (counter < 10); // condition is false immediately, so loop runs only once


// -----------------------------------------------
// SECTION 3: Functions and Data Structures
// -----------------------------------------------

// Exercise 11: Function Definition
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea); // 50


// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');         // 1. Add 'Grape' to the end
fruitList.shift();               // 2. Remove 'Apple' from the front
console.log(fruitList.indexOf('Banana')); // 3. Logs 0 (Banana is now first)


// Exercise 13: Array Copying with slice
// NOTE: originalData must be defined with values before calling slice
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();

// slice() creates a SHALLOW copy.
// For primitive values (numbers, strings, booleans) this is safe —
// changes to clonedData won't affect originalData.
// However, if the array contains OBJECTS or ARRAYS as elements,
// both copies still share references to those same nested objects.
// Mutating a nested object in clonedData WILL also change it in originalData.
// For deep cloning of nested structures, use structuredClone() or JSON.parse(JSON.stringify(...)).
console.log(clonedData); // [1, 2, 3, 4, 5]


// Exercise 14: Object Constructor
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}


// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

let animalArray = [dog, cat];
console.log(animalArray);
// [ Animal { species: 'Canine', sound: 'Woof' },
//   Animal { species: 'Feline', sound: 'Meow' } ]
