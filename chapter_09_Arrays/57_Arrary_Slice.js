/**
 * Slice:
 * Syntax -  array.slice(startIndex, endIndex)
 * extracts a portion of an array and returns it as a new array without modifying the original array.
 * startIndex: The position where the slice begins (0-indexed).
 * endIndex: The position before which the slice stops. It does not include this index.
 */

const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi', 'Cherry', 'Grapes', 'Strawberry'];


// Grab 'Banana' and 'Orange'
const someFruits = fruits.slice(1, 3);
const fevFruits = fruits.slice(-5, -1);

console.log(someFruits);   // Output: ['Banana', 'Orange']
console.log(fruits);       // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'] (Unchanged)
console.log(fevFruits);    // Output: ['Mango', 'Kiwi', 'Cherry', 'Grapes']
console.log(fruits.slice(3)); // Output: ['Mango', 'Kiwi', 'Cherry', 'Grapes', 'Strawberry'] (From index 3 to the end)
console.log(fruits.slice(-3)); // Output: ['Cherry', 'Grapes', 'Strawberry'] (Last 3 elements)
console.log(fruits.slice(0)); // Ouput: all the array elements
console.log(fruits.slice(-3, -5)); // Output: [] (Empty array, as the start index is greater than the end index)    
