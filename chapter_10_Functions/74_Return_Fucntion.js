/*
=========================================
Return Keyword in JavaScript
=========================================

Definition:
- The return keyword is used to send a value back from a function.
- As soon as return executes, the function immediately stops.
- Any code written after return inside the function will NOT execute.

Syntax:

function functionName() {
    return value;
}

Easy Remember:
return = Give back the result
*/

function getStatus(code){
    if(code >= 200 && code <=300) return "2xx series is Success";
    if(code >=400 && code < 500)  return "4xx series is Client Error";
    if(code >=500) return "5xx series is Server Error";
}

console.log(getStatus(200));  // Output - Success
console.log(getStatus(404));  // Output - Client Error
console.log(getStatus(500));  // Output - Server Error

// Return nothing - undefined
function logTest(name){
    console.log(`Running:  ${name}`);
    // no return statement
}

logTest("Hi, this is a log");

// ------------------------

function aa(){
    return [2, 3, 4, 5, 6];
    // return {"name : Jay"}; // Object
}