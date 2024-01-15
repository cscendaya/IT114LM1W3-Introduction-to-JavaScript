/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

// const doubled = numbers.map(number => number * 2)
// console.log(doubled)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

// const evenNums = numbers.filter(number => number % 2 === 0)
// console.log(evenNums)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

// const sum = numbers.reduce(function (result, number) { return result + number}, 0)
// console.log(sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

// const upperWord = words.map(word => word.toUpperCase())
// console.log(upperWord)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

// const fourLetter = words.filter(word => word.length > 4);
// console.log(fourLetter)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

const concaString = words.reduce((a, b) => a + b, "")
console.log(concaString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: map - transform array elements based on a specific function through a new array
        //filter - contain array elements that satisfy a certain condition through a new array
        //reduce - combines array elements into a single value through a new array;
            //it takes an accumulator and a current element, updating the accumulator in each iteration.