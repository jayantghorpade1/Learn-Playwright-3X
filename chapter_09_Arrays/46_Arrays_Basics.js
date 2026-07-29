/*
========================
ARRAYS - MUST KNOW BASICS
========================

1. An Array is a special data structure used to store multiple values in a single variable.

2. Syntax:
   const arrayName = [value1, value2, value3];

//Example:
   const fruits = ["Apple", "Banana", "Mango"];

4. Array indexing starts from 0 from front / left

5. Array indexing starts with -1 from the end / right

6. JavaScript Arrays can store different types of values:
   const data = [10, "JavaScript", true, null];

7. Arrays are mutable, meaning their values can be changed after creation:
   fruits[1] = "Orange";

*/

const fruits = ["Apple", "Banana", "Mango", "Orange"];
  
//   Positive Indexing:
//   Index:    0         1         2         3
//   Value:  Apple    Banana    Mango     Orange

   console.log(fruits[0]); // "Apple"
   console.log(fruits[1]); // Banana
   console.log(fruits[2]); // "Mango"
   console.log(fruits[3]); // Orange

   console.log(fruits[-1]); // undefined

// Negative Indexing Using .at() ⭐
// Modern JavaScript supports negative indexing using the .at() method.
//    .at(-1) → Last element
//    .at(-2) → Second-last element

   console.log(fruits.at(-1)); // "Orange"
   console.log(fruits.at(-2)); // "Mango"
   console.log(fruits.at(-3)); // "Banana"
   console.log(fruits.at(-4)); // "Apple"

// We use ( ) round brackets when there is an array function used like 'at()', otherwise use the regular [ ] brackets

const data = [10, "JavaScript", true, null];