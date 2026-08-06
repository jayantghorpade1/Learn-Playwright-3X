
console.log(greeting); // Output: undefined
var greeting = "Hello Sir!";
console.log(greeting);  // Ouput: Hello Sir!

/**
 * Behind the scenes it will behave like
 * var greeting;
 * console.log(greeting); Here, still it does not have any values assigned to it so nothing to print
 * greeting = "Hello Sir!"; value got assigned to greeting
 * console.log(greeting); it will print --> Hello Sir!
 * 
 */