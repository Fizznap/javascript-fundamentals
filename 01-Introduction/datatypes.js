// datatypes in javascript
// Number, String, Boolean, Undefined, Null, Object, Symbol
// Examples of different data types:
// primitive data types: Number, String, Boolean, Undefined, Null, Symbol
// non-primitive data type: Object (collection of same or different data types) which are retuen inside {}
// primitive data types are immutable (cannot be changed)
// non-primitive data types are mutable (can be changed)
// we can update value of let
// we cannot update value of const but we can update properties / keys inside object


let age = 25; // Number
let name = "John Doe"; // String
let isStudent = false; // Boolean
let x = null;
let a = BigInt("12345678901234567890"); // BigInt
let b = Symbol("id"); // Symbol
const student = { Name: "John", age: 21, marks:"A Grade" }; // Object

console.log(student["Name"]); // Accessing object property using bracket notation
console.log(age);
console.log(student.age); // Accessing object property using dot notation
student["age"] = student["age"] +1;
console.log(student["age"]); // Accessing object property using bracket notation
student["Name"] = "Smit Shinde";
console.log(student["Name"]); // Accessing object property using bracket notation
console.log(typeof age); // Output: number
console.log(typeof name); // Output: string
console.log(typeof isStudent); // Output: boolean
console.log(typeof x); // Output: object (this is a known quirk in JavaScript)
console.log(typeof a); // Output: bigint
console.log(typeof b); // Output: symbol
console.log(typeof student); // Output: object