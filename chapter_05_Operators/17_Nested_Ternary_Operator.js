
// Ternary Operator - Multiple Conditions (condition within condition)
// condition1 ? valueIfTrue1 : condition2 ? valueIfTrue2 : valueIfFalseAll;


let number = -5;
let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";

console.log(result); // Output: "Negative"


let age = 15;
let group = age < 13 ? "Child" : age < 20 ? "Teen" : "Adult";

console.log(group); // Output: "Teen"


let score = 85;
let grade = score >= 90 ? "A" 
          : score >= 80 ? "B" 
          : score >= 70 ? "C" 
          : "F";

console.log(grade); // Output: "B"


