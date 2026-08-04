
let [first, second, third] = ["a", "b", "c"];
console.log("First: ", first);
console.log("Second: ", second);
console.log("Third: ", third);

let[, , thirdElement] = ["a", "b", "c"];
console.log("Third element: ", thirdElement);

let[firstElement, ...restElements] = ["a", "b", "c", "d", "e"];
console.log("First element: ", firstElement);
console.log("Rest of the elements: ", restElements);
