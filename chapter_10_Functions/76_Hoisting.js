/*
=========================================
Hoisting in JavaScript
=========================================

Definition:
- Hoisting is JavaScript's default behavior of moving declarations
  to the top of their scope before code execution.
- Only declarations are hoisted, NOT initializations.

Easy Remember:
Hoisting = Declaration moves up (not the value).
*/
// In JavaScript hoisting, the declaration `var a` is moved to the top of
// its scope before execution, but the assignment (`= "Jayant"`) stays in place.
// So the code behaves like:
//   var a;
//   console.log(a); // undefined
//   a = "Jayant";
//   console.log(a); // Jayant

console.log(a);
var a = "Jayant";
console.log(a)

// Hositing does NOT move your code 
// It is a mental model to understand how the JS engine handles declaratuons during the compilation.

