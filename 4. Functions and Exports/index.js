/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

// function greet(name) {
//     console.log("Hello", name)
// }
// greet("Carlie")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: function declaration -  uses 'function' keyword with a name, can be called before the declaration (hoisted)
                //function myFunction() { }
         // function expression - assigns function a variable, not hoisted.
                //const myFunction = function() { }

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

// Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area

// const calculateArea = function(length, width) {
//     return length * width;
// };

// Call the 'calculateArea' function with any length and width as arguments

// const area = calculateArea(4, 8);
// console.log("Area:", area);


// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer:  a function that you pass as an argument to another function, and it gets executed inside that other function.

// hello(goodbye);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye");
// }
// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. 
//The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

// function modifyArray(array, modifierFunction) {
//     return array.map(modifierFunction);
//   }
  
//   let numbers = [1, 2, 3, 4, 5];
  
//   function incrementByOne(num) {
//     return num + 1;
//   }
  
//   let modifiedNumbers = modifyArray(numbers, incrementByOne);
  
//   console.log("Original:", numbers);
//   console.log("Modified:", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// import { add, PI} from './mathUtils.js'

// console.log(add(2,3), PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

import isPalindrome from './isPalindrome.js'
console.log(isPalindrome("anna"))

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: require function & module.exports variable - it has import/export functionality
            //they are part of CommonJS module system used in Node.js

            //It will depend on the environment and project requirements, however, it is 
            //more suggested to use import and export due to their compatibility with modern
            //javascript, ECMAScript Modules, and modern browsers like Babel
            //it is also the standard for frontend development
