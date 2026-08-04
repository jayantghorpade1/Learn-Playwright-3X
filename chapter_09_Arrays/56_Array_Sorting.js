
let cars = ["Volvo", "BMW", "Audi", "Mercedes", "Jaguar"];
// sort the array in the ascending order (alphabetical order)

cars.sort();
console.log("Sorted the cars array in the ascending order (alphabetical order): ", cars); 
// Output: Sorted the cars array in the ascending order (alphabetical order): Audi, BMW, Jagaur, Mercedes, Volvo


// Now, sort the array in the descending order (reverse alphabetical order)
cars.sort().reverse();
console.log("Sorted the cars array in the descending order (reverse alphabetical order): ", cars);
// Output: Sorted the cars array in the descending order (reverse alphabetical order): Volve, Mercedes, Jaguar, BMW, Audi

let numbers = [14, 22, 65, 93, 34, 9, 202, 1, 101];
numbers.sort();
console.log("Sorted the numbers array in the ascending order (alphanumerical order): ", numbers);
// Output: Sorted the numbers array in the ascending order (alphanumerical order): 1, 101, 14, 202, 22, 34, 65, 94
// Here, the number are sorted in the alphanumerical order, and not in the numerical order.
// Here, it considers the array elements as string and sorts them in the alphabetical order based on the first characters of the array elements.

// Let's sort the numbers array correctly in the ascending order (i.e. Numbers are sorted in the numerical order)
numbers.sort((a,b) => a - b);
console.log("Sorted the numbers array correctly in the ascending order of numbers: ", numbers);
// Output: Sorted the numbers array correctly in the ascending order of numbers: 1, 9, 14, 22, 34, 65, 93, 101, 202

numbers.sort((a,b) => b - a);
console.log("Sorted the numbers array correctly in the descending order of numbers: ", numbers);
// Output: Sorted the numbers array correctly in the descending order of numbers: 202, 101, 93, 65, 34, 22, 14, 9, 1