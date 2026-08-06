/**
 * Function Types/versions:
 * 1. No Return Type and No Parameters
 * 2. No Return Type and With Parameters
 * 3. With Return Type and No Parameters
 * 4. With Return Type and With Parameters
 */

// Type 3: With Return Type & No Parameters

function getCurrentDateTime(){
    console.log("Current Date & Type ");
    return new Date();
}

let currentDateTime = getCurrentDateTime();
console.log(currentDateTime); //Prints the current date and time values returned by the function

function sayHello(){
    console.log("Hi"); // Prints --> Hi
    return "Hello"; // Returns a Hello string but does not print it here
}

let call = sayHello();
console.log(call); // Prints --> Hello