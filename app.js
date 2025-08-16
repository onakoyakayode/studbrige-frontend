// I want to use js to change my name
// Name case in js
// SnakeCase ==> course_Title
// camelCase ==> courseTitle
// PascalCase ===> CourseTitle

// Keywords in JS (Var, let, const)

// Var ===> Reassign and redeclare

// Let ==> Reassign but no redeclare

// Const ==> Can't (!) Reassign and Redeclare

// Data Types ==> String, Number, Boolean, Object, Null, Undefined

// String == "Text"

// Number = 12345

//Boolean = True/False

// Object = {}

// Null

// undefined == Not defined

// How to declare a function in Js

//  function () {
//     any method
//     block scope
// }

let names = document.querySelector("h1.name");
let courseTitle = document.getElementById("course-title");

// names.innerHTML = "This is a JS class".toUpperCase(); // This is to manipulate html text content

// courseTitle.innerHTML = "Full Stack";

let logo = document.querySelector("h1.logo");

//Styling in JavaScript

// names.style.color = "green";
// names.style.fontSize = "6rem";
// names.style.marginBottom = "10rem";

// logo.style.color = "blue";

//Toggle Nav-links

const toggleBtn = document.getElementById("menu-bar");

const navLinks = document.getElementById("nav-links");

// Create a function that toggles navbar

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

//Sunday Class Mathematical Expression

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
const raiseBtn = document.getElementById("raiseBtn");

//Addition Function
addBtn.addEventListener("click", function () {
  let sum = Number(num1.value) + Number(num2.value);
  result.innerHTML = `The sum is ${sum}`;
});

// Subtraction Function
subBtn.addEventListener("click", function () {
  let difference = Number(num1.value) - Number(num2.value);
  result.innerHTML = `The difference is ${difference}`;
});

mulBtn.addEventListener("click", function () {
  let total = Number(num1.value) * Number(num2.value);
  result.innerHTML = `The total is ${total}`;
});

divBtn.addEventListener("click", function () {
  let div = Number(num1.value) / Number(num2.value);
  result.innerHTML = `The division is ${div}`;
});

raiseBtn.addEventListener("click", function () {
  let power = Number(num1.value) ** Number(num2.value);
  result.innerHTML = `The power is ${power}`;
});

// Methods in JavaScript
// 1. power
// 2. toUpperCase
// 3. toLowerCase
// 4. toFixed => 0.0045 ==> toFixed(2) ==> 0.01
// 5. toString ==> 5.toString() ==> "5"
// 6. toPrecision ==> 5.123456.toPrecision(3) ==> "5.12"
// 7. toLocaleString ==> 1234567.89.toLocaleString() ==> "1,234,567.89"
// 8. toExponential ==> 123456.toExponential(2) ==> "1.23e+5"
// 9. toDateString ==> new Date().toDateString() ==> "Mon Oct 23 2023"
// 10. toTimeString ==> new Date().toTimeString() ==> "12:34:56 GMT+0100 (West Africa Standard Time)"
// 11. toISOString
// 12. toJSON
// 13. toLocaleDateString
// 14. toLocaleTimeString
// 15. random
// 16. parseInt
// 17. parseFloat
// 18. isNaN
// 19. isFinite
// 20. isInteger

// Array Methods in JavaScript

// 1. push ==> Adds an element to the end of an array
// 2. pop ==> Removes the last element from an array
// 3. shift ==> Removes the first element from an array
// 4. unshift ==> Adds an element to the beginning of an array
// 5. splice ==> Adds or removes elements from an array
// 6. slice ==> Returns a shallow copy of a portion of an array
// 7. indexOf ==> Returns the first index at which a given element can be found
// 8. lastIndexOf ==> Returns the last index at which a given element can be found
// 9. forEach ==> Executes a provided function once for each array element
// 10. map ==> Creates a new array with the results of calling a provided function on every element in the calling array
// 11. filter ==> Creates a new array with all elements that pass the test implemented by the provided function
// 12. reduce ==> Executes a reducer function
// 13. reduceRight ==> Executes a reducer function on each element of the array, from right to left
// 14. find ==> Returns the value of the first element in the array
// 15. findIndex ==> Returns the index of the first element in the array that satisfies the provided testing function
// 16. some ==> Tests whether at least one element in the array passes the test implemented by the provided function
// 17. every ==> Tests whether all elements in the array pass the test implemented by the provided function
// 18. includes ==> Determines whether an array includes a certain value among its entries
// 19. join ==> Joins all elements of an array into a string
// 20. concat ==> Merges two or more arrays
// 21. sort ==> Sorts the elements of an array in place and returns the sorted array
// 22. reverse ==> Reverses the elements of an array in place
// 23. toString ==> Returns a string representation of the array

// Object Methods in JavaScript

// 1. Object.keys ==> Returns an array of a given object's own enumerable property names
// 2. Object.values ==> Returns an array of a given object's own enumerable property values
// 3. Object.entries ==> Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// 4. Object.assign ==> Copies the values of all enumerable own properties from one or more source objects to a target object
// 5. Object.freeze ==> Freezes an object, preventing new properties from being added to it
// 6. Object.seal ==> Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable
// 7. Object.getOwnPropertyDescriptor ==> Returns a property descriptor
// 8. Object.getOwnPropertyDescriptors ==> Returns all own property descriptors of an object
// 9. Object.getOwnPropertyNames ==> Returns an array of all properties (enumerable and non-enumerable) found directly upon a given object
// 10. Object.getPrototypeOf ==> Returns the prototype of the specified object
// 11. Object.is ==> Determines whether two values are the same value
// 12. Object.isExtensible ==> Determines if an object is extensible (whether new properties can be added to it)
// 13. Object.isFrozen ==> Determines if an object is frozen (whether its properties can be modified)
// 14. Object.isSealed ==> Determines if an object is sealed (whether its properties can be added or removed)
// 15. Object.preventExtensions ==> Prevents new properties from being added to an object
// 16. Object.create ==> Creates a new object with the specified prototype object and properties
// 17. Object.defineProperty ==> Defines a new property directly on an object, or modifies an existing property
// 18. Object.defineProperties ==> Defines new or modifies existing properties directly on an object, returning the object
