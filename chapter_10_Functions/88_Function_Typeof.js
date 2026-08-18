
// Function declaration vs var expression
/**
 * Before running your code line-by-line, the JavaScript engine does a quick pre-scan. 
 * It looks for variable and function declarations and moves them to the top of the file in memory. 
 * This is called hoisting.When a function declaration and a var variable share the exact same name, 
 * the function declaration wins the initial race and gets registered first.
 */

console.log(typeof myFunc);  // "function" (function declaration wins)

var myFunc = "I am a String";

function myFunc(){
    return "I am a Function";
}

console.log(typeof myFunc);  // "String" (var assignment overwrites)

/**  
 * During hoisting:
 * 1. var myFunc;  - Hoisted
 * 2. function myFunc() {...}  - Fully hoisted, takes priority
 * 
 * During execution:
 * 3. myFunc = "I am a String";  - Overwrites

*/