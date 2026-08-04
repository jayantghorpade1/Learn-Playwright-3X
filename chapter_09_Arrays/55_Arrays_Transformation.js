/**
 * Array Transform - 
 * 
 * An array transformation in JavaScript means changing the elements of an original array into 
 * a new format, structure, or value. 
 * Instead of modifying the existing data, you create a completely new array based on your rules.
 * 
 * map(): Transforms every single item (e.g., doubling numbers: [1, 2] becomes [2, 4]).
 * 
 * filter(): Transforms an array by removing items you don't want (e.g., keeping only even numbers).
 * 
 * reduce(): Transforms an array into a single value (e.g., adding all numbers together to get a total sum).
 */

// MAP()
console.log(" ***** Array Transform MAP() method *****")
// Example 1:
let scores = [48, 71, 87, 56, 95, 69];

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log("Score: ", scores);  // Output: Score:  [ 48, 71, 87, 56, 95, 69 ]
console.log("Grades: ", grades);  // Output: Grades:  [ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass', 'Fail' ]

// Example 2:
const celsiusTemperature = [1, 11, 22, 33, 44];
const fahrenheitTemperature = celsiusTemperature.map(celsius => {return (celsius * 9/5)+32; } );

console.log("Temperature in Celsius: ", celsiusTemperature);  // Output: Temperature in Celsius:  [ 1, 11, 22, 33, 44 ]
console.log("Temperature in Fahrenheit: ", fahrenheitTemperature);  // Output: Temperature in Fahrenheit:  [ 33.8, 51.8, 71.6, 91.4, 111.2 ]
console.log("***************************");


// FILTER ()
console.log(" ***** Array FILTER() method *****")
// Example 1
let marks = [45, 69, 71, 98, 83, 69.99, 70.01];

let passingScore = marks.filter(s => s > 70);
console.log("Students marks: ", marks);
console.log("Passed students score: ", passingScore);

// REDUCE ()
console.log(" ***** Array REDUCE() method *****")
// Example 1
let students_marks = [45, 69, 71, 98, 83, 69];

let totalScore = students_marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Students Marks: ", students_marks);
console.log("Total score: ", totalScore);
