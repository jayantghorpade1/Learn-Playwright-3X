/**
 * IIFE: Immediately Invoked Function Expression.
 * It is a JavaScript function that runs as soon as it is defined.
 * IIFEs were used for one main purpose: Data Privacy.
 * In modern JavaScript, you don't see IIFEs as often.
 */

(function() {
    console.log("I run immediately!");
})();

/**
 * 1. The Grouping Operator (): 
 * Wraps the function declaration to turn it into a function expression.
 * 
 * 2. The Invocation Operator (): 
Immediately calls the function right after its creation.
*/

(function() {
    let secretCode = "12345"; // Local variable, hidden from everything else
    console.log("Initializing secure system...");
})();

console.log(secretCode); // ❌ ReferenceError: secretCode is not defined

// Arrow IIFE
(() => {
    console.log("I am an Arrow IIFE and I run instantly!");
})();

/**
 * How it breaks down:
 * () => { ... }: This is the regular arrow function.
 * (...): The outer parentheses wrap the arrow function to turn it into an expression.
 * (): The very last pair of parentheses executes the function immediately.
 */

((name) => {
    console.log(`Hello, ${name}!`);
})("Alice"); // Output: Hello, Alice!
