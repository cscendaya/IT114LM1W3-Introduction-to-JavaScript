/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var a = 4
var a = 6
console.log(a)

consokle.log(abc)
var abc


// // TODO 1.2 Use the let keyword to define a variable.
// // Your code here
let b = 5
console.log(b)
b = 6
console.log(b)

// // TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// // Your code here
const c = 6
// const c = 7


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is global (can redeclare and reassign), let is local (cannot redeclare but can reassign), const cant redeclare and reassign




// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

let aa = 2 ** 3 
console.log(aa)

let ab = 3
console.log(-ab)
console.log(ab++)
console.log(ab)
console.log(++ab)

// Checkpoint 1.2 What operators did you use?
// Answer: unary negation(-), increment (++)
// Your code here


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let d = "alpha"
d += "bet"
console.log(d)

// Checkpoint 1.3 What operators did you use?
// Answer: the concatenation operator (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const banana = 5
console.log(!banana)
console.log(5 || false)

// Checkpoint 1.4 What operators did you use?
// Answer: negation operator


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const names = ["carlie", "shaye"]
console.log(3 in names)
console.log(0 in names)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
const empty = []
console.log(empty == false)
console.log(empty === false)
// Your code here