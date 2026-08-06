/**
 * Function Types/versions:
 * 1. No Return Type and No Parameters
 * 2. No Return Type and With Parameters
 * 3. With Return Type and No Parameters
 * 4. With Return Type and With Parameters
 */

// Type 1: No Return Type & No Parameters
function greet(){
    console.log("Hello, Welcome to Functions"); 
    // Prints a message to the console but it does not return anything
}
greet(); // Call the function
greet(); // Call the function again

let output = greet(); // Call the function and store the return value in a variable
console.log(output); // undefined, because the function does not return anything

