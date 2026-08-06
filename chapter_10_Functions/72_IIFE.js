
// Normal
function name1(){
    console.log("This is normal function call");
}
name1();


// IIFE (Immediately Invoked Function Expression)
// This function is invoked immediately after its definition
// It is a self-executing anonymous function
// It is used to create a new scope and avoid polluting the global namespace
// It is also used to create a private scope for variables and functions

(function() {
    console.log("This is an IIFE, an anonymous function that is invoked immediately after its definition");
})();

// Arrow function IIFE
// This is an arrow function that is invoked immediately after its definition
// We can not call this function again, because it is not assigned to any variable

( () => {
    console.log("This is an IIFE, an arrow function that is invoked immediately after its definition");
})();
