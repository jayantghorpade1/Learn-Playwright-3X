
// String Operators

// Concatenation Operator (+)
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(typeof str1); // Output: string
console.log(typeof str2); // Output: string
console.log(typeof result); // Output: string
console.log(result); // Output: Hello World

// Concatenation Assignment Operator (+=)   
let str3 = "Hello";
str3 += " World";
console.log(typeof str3); // Output: string
console.log(str3); // Output: Hello World

// String Interpolation (Template Literals)
let name = "John";
let age = 30;
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(typeof greeting); // Output: string
console.log(greeting); // Output: My name is John and I am 30 years old.    

// String Comparison Operators - It works based on the Unicode values of the characters in the strings. 
let str4 = "apple";
let str5 = "banana";    
console.log(str4 < str5); // Output: true
console.log(str4 > str5); // Output: false
console.log(str4 === str5); // Output: false
console.log(str4 !== str5); // Output: true\

// String Length Operator
let str6 = "Hello World";
console.log(str6.length); // Output: 11

// String Indexing
let str7 = "Hello";
console.log(str7[0]); // Output: H
console.log(str7[1]); // Output: e
console.log(str7[2]); // Output: l
console.log(str7[3]); // Output: l
console.log(str7[4]); // Output: o

// String Methods
let str8 = "Hello World";
console.log(str8.toUpperCase()); // Output: HELLO WORLD
console.log(str8.toLowerCase()); // Output: hello world

console.log("Hello" + "World");
console.log("Hello", "Jayant");
console.log(1, 2, 3,4,5, "Hello", 'New User');