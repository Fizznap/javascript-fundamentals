/*
Operators in JS :
are used to perform operations on variables and values.
They can be arithmetic, assignment, comparison, logical, bitwise, etc.
*/
// Arithmetic Operators

let a = 10;
let b = 5;

console.log("a = " , a ,  "b =" ,b);
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a / b =", a/b);
console.log("a % b =", a%b);
console.log("a ** b =", a**b);


//Unary Operators
//++c Preincrement: increments c by 1, then returns c.
//--d Predecrement: decrements d by 1, then returns d.
//c++ Postincrement: returns c, then increments c by 1.
//d-- Postdecrement: returns d, then decrements d by 1.

let c = 10;
let d = 5;

console.log("c = " , c ,  "d =" ,d);
c++;
console.log("c++ =",c);
d--;
console.log("d-- =",d);
a++;
console.log("++a =",a);
b--;
console.log("--b =",b);


// Assignment Operators
// Used to assign values to variables

let e = 10;
let f = 5;

console.log("e = " , e ,  "f =" ,f);
console.log("e += f =", e += f); // e = e + f
console.log("e **= f =", e **= f); // e = e ** f
console.log("e += 4 =", e += 4); // e = e + 4
console.log("e -= 4 =", e -= 4); // e = e - 4
console.log("e *= 4 =", e *= 4); // e = e * 4

// Comparison Operators
// Used to compare two values and return a boolean result
let g = 10;
let h = 5;
let g1 = "10";
console.log("g = " , g ,  "h =" ,h);
console.log("g == h :" , g == h);
console.log("g != h :" , g != h);
console.log("g === g1 :" , g === g1);
console.log("g !== h :" , g !== h);
console.log("g > h :" , g > h);
console.log("g < h :" , g < h);
console.log("g >= h :" , g >= h);
console.log("g <= h :" , g <= h);  

// Logical Operators
// Used to combine multiple boolean expressions and return a boolean result

let i = true;
let j = false;

console.log("i = " , i ,  "j =" ,j);
console.log("i && j :" , i && j);   
console.log("i || j :" , i || j);
console.log("!i :" , !i);
console.log("!j :" , !j);
console.log("!(i && j) :" , !(i && j));

// Ternary Operator
// A shorthand for if-else statements
//condition ? expressionIfTrue : expressionIfFalse

let k = 19;
let result = (k >= 18) ? "Eligible to vote" : "Not eligible to vote";

console.log("result = " , result);