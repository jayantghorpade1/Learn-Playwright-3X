// Template Literals in JavaScript (ES6) allow you to create strings that can span multiple lines and include embedded expressions. They are enclosed by backticks (`) instead of single or double quotes.

function greetWithTemplateLiteral(name) {
    return `Hi ${name}, Welcome to the Javascript Functions`;
}

let op = greetWithTemplateLiteral('John'); // Call the function with an argument
let op1 = greetWithTemplateLiteral('Cena'); // Call the function with an argument
console.log(op); // Prints --> Hi John, Welcome to the Javascript functions 
console.log(op1); // Prints --> Hi Cena, Welcome to the Javascript functions

