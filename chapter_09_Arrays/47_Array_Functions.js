/**
 * Understanding the most common functions used in ARRAY's
 * 1. PUSH
 * 2. POP
 * 3. UNSHIFT
 * 4. SHIFT
 * 5. SPLICE
 * 6. LENGTH
 */

// PUSH - Adding a new elements at the End of the Array -        push(x)



// POP - Removing the Last element from the Array -              pop(y)



// UNSHIFT - Adding a new element at the Start of the Array -    unshift(a)



// SHIFT - Removing 1st element from the Arrya -                 shift(b)




/*
=========================================
splice() Method in JavaScript
=========================================

Definition:
- splice() is used to Add, Remove, or Replace elements in an array.
- It modifies (changes) the original array.

Syntax:
array.splice(startIndex, deleteCount, item1, item2, ...);

Parameters:
1. startIndex  → Position where operation starts.
2. deleteCount → Number of elements to remove.
3. item1, item2... (Optional) → New elements to insert.

Interview Points:
✔ splice() modifies the original array.
✔ Returns an array containing the removed elements.
✔ Used for Add, Remove, and Replace operations.
✔ Very commonly asked along with slice().

Remember:
splice() = Changes the original array.
slice()  = Does NOT change the original array.
*/

//Examples:
// 1. Remove Elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);  // Output: ["Apple", "Orange"]


// 2. Add Elements
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(2, 0, "Mango");

console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]


// 3. Replace Elements
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(1, 1, "Mango");

console.log(fruits);   // Output: ["Apple", "Mango", "Orange"]


// Length - Identifying the length of the Array
// In Java Script, there is NO concept of 'Array Index Out of Bound' 

let fruits = ["Apple", "Banana", "Mango", "Orange"]; // 0  1  2  3 
console.log(fruits.length); // Output: 4

console.log(fruits[5]);  // Output: UNDEFINED as there is not element at position 5

// From - Breaking the STRING into CHARACTERS 

let input = Array.from("Hello"); // ["H", "e", "l", "l", "o"]
