
// Arithmetic Operators
let a = 10;
let b = 5;
let c = 11;
console.log("Values of a and b are: ", a, b);

// Addition
let sum = a + b; // 15  
console.log("Sum of a and b is: ", sum);

// Subtraction
let difference = a - b; // 5
console.log("Difference of a and b is: ", difference);

// Multiplication
let product = a * b; // 50 
console.log("Product of a and b is: ", product);

// Division
let quotient = a / b; // 2
console.log("Quotient of a and b is: ", quotient);

// Modulus (Remainder) 
// If the dividend is smaller than the divisor, the remainder is the dividend itself. 
// For example, 5 % 10 = 5, because 5 is smaller than 10.
// If n%2 = 0, then n is an even number. 
// If n%2 = 1, then n is an odd number.

let remainder = a % b; // 0 
console.log("Remainder of a and b is: ", remainder);

let remainder2 = c % b; // 1
console.log("Remainder of c and b is: ", remainder2);

// Exponentiation
let power = a ** b; // 100000
console.log("a raised to the power of b is: ", power);

// Increment
a++; // a is now 11
console.log("Value of a after increment is: ", a);

// Decrement
b--; // b is now 4  
console.log("Value of b after decrement is: ", b);

// Assignment Operators
let x = 10;
x += 5; // x is now 15 (equivalent to x = x + 5)
console.log("Value of x after addition assignment is: ", x);

x -= 3; // x is now 12 (equivalent to x = x - 3)
console.log("Value of x after subtraction assignment is: ", x);

x *= 2; // x is now 24 (equivalent to x = x * 2)
console.log("Value of x after multiplication assignment is: ", x);

x /= 4; // x is now 6 (equivalent to x = x / 4)
console.log("Value of x after division assignment is: ", x);

x %= 5; // x is now 1 (equivalent to x = x % 5) 
console.log("Value of x after modulus assignment is: ", x);


// Comparison Operators
let num1 = 10;
let num2 = 20; 


// Equal to
let isEqual = num1 == num2; // false
console.log("Is num1 equal to num2? ", isEqual);

// Not equal to
let isNotEqual = num1 != num2; // true
console.log("Is num1 not equal to num2? ", isNotEqual);

// Strict equal to
let isStrictEqual = num1 === num2; // false
console.log("Is num1 strictly equal to num2? ", isStrictEqual);

// Strict not equal to
let isStrictNotEqual = num1 !== num2; // true
console.log("Is num1 strictly not equal to num2? ", isStrictNotEqual);

// Greater than
let isGreaterThan = num1 > num2; // false
console.log("Is num1 greater than num2? ", isGreaterThan);

// Less than
let isLessThan = num1 < num2; // true   
console.log("Is num1 less than num2? ", isLessThan);

// Greater than or equal to
let isGreaterThanOrEqual = num1 >= num2; // false   
console.log("Is num1 greater than or equal to num2? ", isGreaterThanOrEqual);

// Less than or equal to
let isLessThanOrEqual = num1 <= num2; // true
console.log("Is num1 less than or equal to num2? ", isLessThanOrEqual);

// Logical Operators
let isAdult = true;
let hasPermission = false;

// Logical AND
let canAccess = isAdult && hasPermission; // false
console.log("Can access? ", canAccess);

// Logical OR
let canEnter = isAdult || hasPermission; // true
console.log("Can enter? ", canEnter);

// Logical NOT
let isNotAdult = !isAdult; // false
console.log("Is not adult? ", isNotAdult);

