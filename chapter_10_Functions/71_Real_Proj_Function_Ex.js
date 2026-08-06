
//Normal way of writing a function
function validationStatus(status){
    if(status >=200 && status < 300) {
        console.log("Request is fine");
    }
}
console.log(validationStatus(201)); // Prints --> Request is fine
console.log(validationStatus(404)); // Prints --> Undefined

// Function Expression
const validationStatusExpression = function(status){
    if(status >=200 && status < 300) {
        console.log("Request is fine");
    }
}
console.log(validationStatusExpression(201)); // Prints --> Request is fine
console.log(validationStatusExpression(404)); // Prints --> Undefined

// Arrow function
const validationStatusArrow = (status) => {
    if(status >=200 && status < 300) {
        console.log("Request is fine");
    }
}
console.log(validationStatusArrow(201)); // Prints --> Request is fine
console.log(validationStatusArrow(404)); // Prints --> Undefined

