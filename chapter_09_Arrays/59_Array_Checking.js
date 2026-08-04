
let arr = [1, 2, 3, 4];
let s = ["a"];

console.log("Is arr an Array? ", Array.isArray(arr)); // Output: Is arr an array? True
console.log("Is s an Array? ", Array.isArray(s)); // Output: Is s an array? false

/**
 * EVRY() method checks if all elements in an array pass a test condition provided by a function. 
 * It returns TRUE if all elements pass the test, and FALSE if at least one elements fails the test.
 * 
 * Syntax: array.every(callback(element[, index[, array]])[, thisArg])  
 */

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let isAllEven = nums.every(num => num % 2 === 0);
console.log("Are all numbers in the array even? ", isAllEven); // Output: Are all numbers in the array even? True   
console.log("Are all number in the array greater than 50? ", nums.every(num => num > 50)); // Output: false

console.log("Are all numbers in the array less than 120? ", nums.some(num => num < 120)); //  Output: true
console.log("Are all number in the array greater than 50? ", nums.some(num => num > 50)); // Output: true
console.log("Are all numbers in the array greater than 150? ", nums.some(num => num > 150)); // Output: false