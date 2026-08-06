
/**
 * Functions: 
 * Functions are block of reusable block of code that can be called multiple times in a program. 
 * Functions are created to perform a specific tasks.
 * Calling and defining functions are 2 different things.
 * Syntax:
 * Definition:
 * function nameOfFunction(parameters){
 *         code to be executed repeatedly
 * }
 * Calling:
 * nameOfFunction(arguments);
 * e.g. - add(2,3); // Arguments are values passed to the function when it is called.
 * 
 */

// Define
function getResult(score){
    return score >= 50 ? "Pass" : "Fail";
}

// Calling a function
console.log(getResult(85)); // Pass
console.log(getResult(49)); // Fail