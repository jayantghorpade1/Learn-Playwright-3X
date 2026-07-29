// Searching through Arrays

let result = ["Pass", "Failed", "Skip", "Blocked", "Error"];

//indexOf - return index of an element or -1 if not found

console.log(result.indexOf("Skip")); // 2

console.log(result.indexOf("Not Found")); // -1 as this option is not there in the Array

// LastIndexOf - Search from the end side
console.log(result.lastIndexOf("Failed"));

// Includes - returns boolean 
console.log(result.includes('Pass'));  // True
console.log(result.includes('Unavailable'));  // False

