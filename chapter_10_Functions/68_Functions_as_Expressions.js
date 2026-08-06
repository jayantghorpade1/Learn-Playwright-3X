
// In JavaScript, functions can also be used as Expressions. 
// A function expression is created when a function is assigned to a variable. 
// Function expressions can be anonymous (without a name) or named.


//Normal way of defining a function
function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet('John'));


// Function Expression (Anonymous Function)
const greet1 = function(name1){
    return `Hello, ${name1}!`;
}
console.log(greet1('Tom'));