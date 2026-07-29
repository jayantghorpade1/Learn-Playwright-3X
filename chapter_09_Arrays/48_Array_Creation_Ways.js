
let browsers = ["Chrome", "Safari", "Firefox", 'Edge'];  // Preferred way of handling Arrays

// Array Constructor
let fruits = new Array(4);   // Creates an EMPTY Array with LENGTH of 4
fruits[0] = "Apple";
fruits[1] = "Banana";

let cars = new Array(1, 2, 3, 4);   // Creates an Array having 4 elements in it

let tests = new Array.of(10, 20, 30, 40, 50);   // NOT Preferred way
console.log(tests.length);