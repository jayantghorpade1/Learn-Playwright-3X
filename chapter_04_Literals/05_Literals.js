
let firstName = "John"; // String literal with double quotes

let lastName = 'Doe';   // String literal with single quotes

let isActive = true;    // Boolean literal

let age = 30;   // Number literal without decimal point

let height = 5.9; // Number literal with decimal point  

const PI = 3.14;    // Constant number literal where the value cannot be changed

let nullValue = null;    // Null literal represents the intentional absence of any object value 

let undefinedValue;     // Undefined literal represents a variable that has been declared but not assigned a value  

let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt literal for large integers   

let binaryValue = 0b1010; // Binary literal (base 2)

let octalValue = 0o12; // Octal literal (base 8)    

let hexadecimalValue = 0xA; // Hexadecimal literal (base 16)

let templateLiteral = `Hello, ${firstName} ${lastName}!`; // Template literal with embedded expressions 

let multiLineString = `This is a multi-line string
that spans across
multiple lines.`; // Multi-line string literal using backticks    

let tiny = 1e-6; // Scientific notation literal for very small numbers

let colorHex = 0xFF5733; // Hexadecimal color literal

let regexLiteral = /ab+c/; // Regular expression literal

let arrayLiteral = [1, 2, 3, 4, 5]; // Array literal

let objectLiteral = { name: "John", age: 30, isActive: true }; // Object literal

let functionLiteral = function() { return "Hello, World!"; }; // Function literal

let arrowFunctionLiteral = () => "Hello, Arrow Function!"; // Arrow function literal    

let symbolLiteral = Symbol("uniqueIdentifier"); // Symbol literal for creating unique identifiers   

// Note: The above code demonstrates various types of literals in JavaScript, including strings, numbers, booleans, null, undefined, BigInt, binary, octal, hexadecimal, template literals, multi-line strings, regular expressions, arrays, objects, functions, arrow functions, and symbols.  

// Now let's log all the literals to the console to see their values and their types.
console.log("String Literal (firstName):", firstName, "Type:", typeof firstName);
console.log("String Literal (lastName):", lastName, "Type:", typeof lastName);

console.log("Boolean Literal (isActive):", isActive, "Type:", typeof isActive);
console.log("Number Literal (age):", age, "Type:", typeof age);
console.log("Number Literal (height):", height, "Type:", typeof height);
console.log("Constant Number Literal (PI):", PI, "Type:", typeof PI);

console.log("Null Literal (nullValue):", nullValue, "Type:", typeof nullValue);
console.log("Undefined Literal (undefinedValue):", undefinedValue, "Type:", typeof undefinedValue);
console.log("BigInt Literal (bigIntValue):", bigIntValue, "Type:", typeof bigIntValue);
console.log("Binary Literal (binaryValue):", binaryValue, "Type:", typeof binaryValue);
console.log("Octal Literal (octalValue):", octalValue, "Type:", typeof octalValue);
console.log("Hexadecimal Literal (hexadecimalValue):", hexadecimalValue, "Type:", typeof hexadecimalValue);
console.log("Template Literal (templateLiteral):", templateLiteral, "Type:", typeof templateLiteral);
console.log("Multi-line String Literal (multiLineString):", multiLineString, "Type:", typeof multiLineString);
console.log("Regular Expression Literal (regexLiteral):", regexLiteral, "Type:", typeof regexLiteral);
console.log("Array Literal (arrayLiteral):", arrayLiteral, "Type:", typeof arrayLiteral);
console.log("Object Literal (objectLiteral):", objectLiteral, "Type:", typeof objectLiteral);
console.log("Function Literal (functionLiteral):", functionLiteral, "Type:", typeof functionLiteral);
console.log("Arrow Function Literal (arrowFunctionLiteral):", arrowFunctionLiteral, "Type:", typeof arrowFunctionLiteral);
console.log("Symbol Literal (symbolLiteral):", symbolLiteral, "Type:", typeof symbolLiteral);
console.log("Scientific Notation Literal (tiny):", tiny, "Type:", typeof tiny);
console.log("Hexadecimal Color Literal (colorHex):", colorHex, "Type:", typeof colorHex);   

