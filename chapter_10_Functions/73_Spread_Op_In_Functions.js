/*
=========================================
Spread Operator (...) in JavaScript
=========================================

Definition:
- The Spread Operator (...) expands (spreads out) the elements
  of an array, string, or object.
- It is represented by three dots (...).

Syntax:
...array
...string
...object

Use:
Spread operator is useful when we want to pass an array 
or string as individual arguments to a function, 
or when we want to create a copy of an array or object, 
or when we want to merge two arrays or objects
or when we do not know how many objects/elements we will be passing to a function, 
we can use the spread operator to pass them as arguments.

Easy Remember:
Spread = Expand
*/

function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];

// Using Spread Operator to pass array elements as arguments to the function
let result = sum(...numbers);
console.log(result); // Output: 6

// Copying an array using Spread Operator
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Merging two arrays using Spread Operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using Spread Operator with strings
let str = "Hello";
let charArray = [...str];
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']    


function hasError(...codes){
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404, 500];
// Using Spread Operator to pass array elements as arguments to the function
let hasErrorResponse = hasError(...responseCodes);
console.log(hasErrorResponse); // Output: true, here at least one response code is greater than or equal to 400, so it returns truea 

