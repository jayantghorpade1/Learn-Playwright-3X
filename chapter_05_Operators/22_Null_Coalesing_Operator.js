/**
 * The nullish coalescing operator (??) is a logical operator introduced in JavaScript ES2020. 
 * It returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 * Syntax:
 * leftExpr ?? rightExpr
 */

// Example 1
let user;
console.log(user ?? "Anonymous"); // Output: "Anonymous"

user = "John";
console.log(user ?? "Anonymous"); // Output: "John"

// Example 2
let amul = null;
let milk = amul ?? "Chitale Milk";
console.log(milk);

// Example 3
// Real time example - Sometime it happenes that an API does not return any response
// In such case, we show empty brackets like {} instead of NULL or EMPTY value as response.

let apiResponse;
let responseData = apiResponse ?? "{}";
console.log(responseData);