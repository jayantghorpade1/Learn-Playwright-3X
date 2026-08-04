
let originalArr = [1, 2, 3];

let copiedArr1 = [...originalArr]; // Using Spread operator to copy the original array in the new array
console.log("Original array: ", originalArr);
console.log("Copied array from the original array using Spread operator: ", copiedArr1);

let copiedArr2 = originalArr.slice();
console.log("Copied an arrya from the original array using slice() method: ", copiedArr2);

let copiedArr3 = Array.from(originalArr);
console.log("Copied an array from the original array using Array.from() method: ", copiedArr3);

let copiedArr4 = originalArr.map(x => x);
console.log("Copied an array from the original array using map() method: ", copiedArr4);

let copiedArr5 = originalArr.filter(x => true);
console.log("Copied an array from the original array using filter() method: ", copiedArr5); 

let copiedArr6 = originalArr.concat();
console.log("Copied an array from the original array using concat() method: ", copiedArr6);

// Deep Copy: If we change/modify the original array, the copied array will not be affected.
let deepCopiedArr = originalArr;

originalArr.push(4, 5);
console.log("Original array after modification: ", originalArr);
console.log("Deep copied array from the original array: ", deepCopiedArr); // Output: [1, 2, 3, 4, 5] (Affected by the change in the original array)        

deepCopiedArr.push(6, 7);
console.log("Original array after modification: ", originalArr);
console.log("Deep copied array from the original array: ", deepCopiedArr); // Output: [1, 2, 3, 4, 5, 6, 7] (Affected by the change in the original array)  