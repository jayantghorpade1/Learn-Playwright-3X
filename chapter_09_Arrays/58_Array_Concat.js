// Array Concatination 

let a = [1, 2];
let b = [ 3, 4, 5];

let c = a.concat(b);
console.log("Concatenated array of a + b: ", c); // Output: [1, 2, 3, 4, 5]

// Array Concatenation can also be done using the Spread operator (...).
// Spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

let d = [...a, ...b];
console.log("Concatenated array of a + b using Spread operator: ", d); // Output: [1, 2, 3, 4, 5]

// Array JOIN()
let result = ["Pass", "Fail", "NA"].join(" | ");
console.log("Array after joining with pipe operator: ", result); // Output: Pass | Fail | NA    