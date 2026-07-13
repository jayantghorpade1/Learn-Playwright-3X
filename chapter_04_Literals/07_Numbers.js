/**
 * ------------------------------------------------------------------------------------
 * NUMBERS in JavaScript are represented as 64-bit floating point values, following the IEEE 754 standard. 
 * This means that all numbers, whether integers or decimals, are treated as floating-point numbers. 
 * JavaScript also supports special numeric values such as Infinity, -Infinity, and NaN (Not-a-Number).   
 * 
 * There is no separate type for Integers, Float, Double or Decimal in JavaScript. All numbers are of type 'number'.
 * 
 * JavaScript also supports BigInt, a special numeric type that can represent integers with arbitrary precision. 
 * BigInt values are created by appending 'n' to the end of an integer literal or by using the BigInt() constructor.
 * 
 * Key Points:
 * 1. All numbers in JavaScript are represented as 64-bit floating point values.
 * 2. JavaScript supports special numeric   
 * 3. JavaScript supports BigInt for arbitrary precision integers.
 * 4. JavaScript does not have separate types for integers and floating-point numbers; all are of type 'number'.
 * 5. JavaScript provides various methods and properties for working with numbers, including Math methods, Number methods, and global functions like parseInt() and parseFloat().
 * 6. JavaScript also supports numeric literals in different bases, such as binary (0b), octal (0o), and hexadecimal (0x).  
 * 7. JavaScript provides methods for converting numbers to strings and vice versa, as well as formatting numbers for display.  
 * 8. JavaScript provides methods for checking if a value is finite, NaN, or an integer, as well as methods for rounding numbers to a specified number of decimal places.   
 * 9. JavaScript provides methods for performing arithmetic operations, including addition, subtraction, multiplication, division, and modulus. 
 * 10. JavaScript provides methods for working with floating-point numbers, including methods for handling precision and rounding errors.   
 * 11. JavaScript provides methods for working with BigInt values, including methods for performing arithmetic operations and converting between BigInt and Number types.   
 * 12. JavaScript provides methods for working with numeric strings, including methods for parsing and formatting numeric values.   
 * 13. JavaScript provides methods for working with numeric arrays, including methods for sorting, filtering, and mapping numeric values.   
 * 14. JavaScript provides methods for working with numeric objects, including methods for creating and manipulating numeric values as objects. 
 * 15. JavaScript provides methods for working with numeric constants, including methods for accessing and using predefined numeric values such as Math.PI and Number.MAX_VALUE.    
 * 
 * Examples:
 * let integerNumber = 42;
 **/


//  Integer Literals

let decimal = 42; // Decimal integer literal
console.log("\n Decimal Integer Literal (decimal):", decimal, " || Type:", typeof decimal); // Output: Decimal Integer Literal (decimal): 42 Type: number

let binary = 0b101010;   
console.log("\n Binary Integer Literal (binary):", binary, " || Type:", typeof binary); // Output: Binary Integer Literal (binary): 42 Type: number

let octal = 0o52;   
console.log("\n Octal Integer Literal (octal):", octal, " || Type:", typeof octal); // Output: Octal Integer Literal (octal): 42 Type: number  

let hexadecimal = 0xA;   
console.log("\n Hexadecimal Integer Literal (hexadecimal):", hexadecimal, " || Type:", typeof hexadecimal); // Output: Hexadecimal Integer Literal (hexadecimal): 10 Type: number  

let negativeNumber = -42;
console.log("\n Negative Number Literal (negativeNumber):", negativeNumber, " || Type:", typeof negativeNumber); // Output: Negative Number Literal (negativeNumber): -42 Type: number 

// Floating-Point Literals

let floatNumber = 3.14;
console.log("\n Floating-Point Literal (floatNumber):", floatNumber, " || Type:", typeof floatNumber); // Output: Floating-Point Literal (floatNumber): 3.14 Type: number  

let scientificNotation = 1.23e4; // Scientific notation literal
console.log("\n Scientific Notation Literal (scientificNotation):", scientificNotation, " || Type:", typeof scientificNotation); // Output: Scientific Notation Literal (scientificNotation): 12300 Type: number   

let negativeScientificNotation = -1.23e4; // Negative scientific notation literal
console.log("\n Negative Scientific Notation Literal (negativeScientificNotation):", negativeScientificNotation, " || Type:", typeof negativeScientificNotation); // Output: Negative Scientific Notation Literal (negativeScientificNotation): -12300 Type: number

let smallScientificNotation = 1.23e-4; // Small scientific notation literal
console.log("\n Small Scientific Notation Literal (smallScientificNotation):", smallScientificNotation, " || Type:", typeof smallScientificNotation); // Output: Small Scientific Notation Literal (smallScientificNotation): 0.000123 Type: number    

let x = .5; // Leading decimal point literal
console.log("\n Leading Decimal Point Literal (x):", x, " || Type:", typeof x); // Output: Leading Decimal Point Literal (x): 0.5 Type: number 

let y = 5.; // Trailing decimal point literal
console.log("Trailing Decimal Point Literal (y):", y, " || Type:", typeof y); // Output: Trailing Decimal Point Literal (y): 5 Type: number 

// BigInt Literals - This will not be used in Automation Testing as it is not supported in Playwright and Selenium. It is only used in JavaScript for large integers.

let bigIntValue = 1234567890123456789012345678901234567890n;
console.log("\n BigInt Literal (bigIntValue):", bigIntValue, " || Type:", typeof bigIntValue); // Output: BigInt Literal (bigIntValue): 1234567890123456789012345678901234567890 Type: bigint

let anotherBigIntValue = BigInt("1234567890123456789012345678901234567890");
console.log("\n BigInt Literal (anotherBigIntValue):", anotherBigIntValue, " || Type:", typeof anotherBigIntValue); // Output: BigInt Literal (anotherBigIntValue): 1234567890123456789012345678901234567890 Type: bigint  

let negativeBigIntValue = -1234567890123456789012345678901234567890n;
console.log("\n Negative BigInt Literal (negativeBigIntValue):", negativeBigIntValue, " || Type:", typeof negativeBigIntValue); // Output: Negative BigInt Literal (negativeBigIntValue): -1234567890123456789012345678901234567890 Type: bigint   

let BigIntFromNumber = BigInt(42);
console.log("\n BigInt from Number (BigIntFromNumber):", BigIntFromNumber, " || Type:", typeof BigIntFromNumber); // Output: BigInt from Number (BigIntFromNumber): 42 Type: bigint    

let BigIntFromString = BigInt("32173672613726372136271362183772136");
console.log("\n BigInt from String (BigIntFromString):", BigIntFromString, " || Type:", typeof BigIntFromString); // Output: BigInt from String (BigIntFromString): 32173672613726372136271362183772136 Type: bigint   

// Special Numeric Values

let positiveInfinity = Infinity;
console.log("\n Positive Infinity (positiveInfinity):", positiveInfinity, " || Type:", typeof positiveInfinity); // Output: Positive Infinity (positiveInfinity): Infinity Type: number 

let negativeInfinity = -Infinity;
console.log("\n Negative Infinity (negativeInfinity):", negativeInfinity, " || Type:", typeof negativeInfinity); // Output: Negative Infinity (negativeInfinity): -Infinity Type: number    

let notANumber = NaN;
console.log("\n Not-a-Number (notANumber):", notANumber, " || Type:", typeof notANumber); // Output: Not-a-Number (notANumber): NaN Type: number

let isNaNValue = isNaN(notANumber);
console.log("\n isNaN(notANumber):", isNaNValue, " || Type:", typeof isNaNValue); // Output: isNaN(notANumber): true Type: boolean

let isFiniteValue = isFinite(positiveInfinity);
console.log("\n isFinite(positiveInfinity):", isFiniteValue, " || Type:", typeof isFiniteValue); // Output: isFinite(positiveInfinity): false Type: boolean 

console.log("\n 1/0:", 1/0, " || Type:", typeof (1/0)); // Output: 1/0: Infinity Type: number
console.log("\n -1/0:", -1/0, " || Type:", typeof (-1/0)); // Output: -1/0: -Infinity Type: number
console.log("\n 0/0:", 0/0, " || Type:", typeof (0/0)); // Output: 0/0: NaN Type: number
console.log("\n Math.sqrt(-1):", Math.sqrt(-1), " || Type:", typeof Math.sqrt(-1)); // Output: Math.sqrt(-1): NaN Type: number  
console.log("\n Hello" * 10, " || Type:", typeof ("Hello" * 10)); // Output: Hello * 10: NaN Type: number       
