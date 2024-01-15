/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

// const first = numbers[0]
// const fifth = numbers[6]
// const last = numbers[numbers.length-1] 

// console.log(first)
// console.log(fifth)
// console.log(last)

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

// const numMax = Math.max(...numbers)
// const numMin = Math.min(...numbers)
// const numAve = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;


// console.log(numMax)
// console.log(numMin)
// console.log(numAve)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Javascript array (similar to Python list) is an object that is dynamic in terms of sizing 
            //JS Arrays cannot contain different data types, but python lists can

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const IT114L = {
    courseCode: "IT114L",
    name: "Web Development",
    units: 2,
    studNumTotal: 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

// IT114L.profName = "Sir Job Lipat"
// console.log("Professor: ", IT114L.profName)

for (const properties in IT114L) {
    console.log(`${properties}: ${IT114L[properties]}`)
}
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

// const courses = [
//     { courseCode: "IT114L", units: 2 },
//     { courseCode: "IT132", units: 3 },
//     { courseCode: "IT114", units: 2 }
// ];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

// const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);
// console.log("Total Units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Javascript objects are the equivalent of Python dictionaries that both has key-value pairs

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// const copiedNumber = [...numbers, 100];
// console.log("numbers array with additional 100: ", copiedNumber);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const { courseCode: IT114LCourseCode, units: IT114LUnits, ...otherInfo } = IT114L;
console.log("IT114L Course Code:", IT114LCourseCode);
console.log("IT114L Units:", IT114LUnits);
console.log("Other Info:", otherInfo);