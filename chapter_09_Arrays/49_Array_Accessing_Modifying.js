
let cars = ["BMW", "Tata", "Mahindra", "Audi"];

console.log(cars[0]);  // BMW
console.log(cars[3]);  // Audi

console.log(cars[4]);  // Undefined

console.log(cars.at(-1)); // Audi
console.log(cars.at(-3)); // Tata

console.log(cars.at(-5));  // Undefined

// Modifying Arrays
console.log('Before array modification: ', cars);
cars[2] = "Honda";
console.log('After array modification: ', cars);

// Length
console.log('Length of array: ', cars.length);