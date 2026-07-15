
// Data types in the Java Script programming language are used to define the type of data that can be stored in a variable. JavaScript has several built-in data types, including:

// 1. Number: Represents numeric values, including integers and floating-point numbers. 
// 2. BigInt: Represents large integers that cannot be represented by the Number type.
// 3. String: Represents sequences of characters, used for storing and manipulating text.   
// 4. Boolean: Represents logical values, either true or false.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 6. Null: Represents the intentional absence of any object value.
// 7. Symbol: Represents a unique and immutable value, often used as an identifier for object properties.
// 8. Object: Represents a collection of key-value pairs, used for storing and manipulating complex data structures.
// 9. Function: Represents a block of reusable code that can be executed when called.
// 10. Array: Represents an ordered collection of values, used for storing and manipulating lists of data.
// 11. Date: Represents a specific point in time, used for working with dates and times.
// 12. RegExp: Represents a regular expression, used for pattern matching and text manipulation.

let age = 30;

/*
Here,
- `age` → Variable
- `30` → Value
- `number` → Data Type
*/


// String - Stores text.
let name = "John";


// Number - Stores whole numbers and decimal numbers.
let age = 30;
let price = 99.99;

// BigInt - Stores integers larger than the `Number` limit.
let population = 12345678901234567890n;

// Boolean - Stores `true` or `false` values.
let isLoggedIn = true;

// Undefined - Variable is declared but no value is assigned.

let city;
console.log(city); // Here, variable `city` is declared but not assigned any value, so it is `undefined`.   

// Null - Represents an intentionally empty value.

let user = null;
