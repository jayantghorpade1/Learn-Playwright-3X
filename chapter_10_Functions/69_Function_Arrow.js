
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

// Arrow function
const greet2 = (name2) => `Hello, ${name2}!`;
console.log(greet2('Roman'));

const greet3 = (name3) => console.log (" ");