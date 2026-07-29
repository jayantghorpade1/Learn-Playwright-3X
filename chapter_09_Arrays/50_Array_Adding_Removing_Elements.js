/**
 * Let see examples of Adding and Removing an elements in the Arrays with the help of
 * 1. PUSH
 * 2. POP
 * 3. UNSHIFT
 * 4. SHIFT
 */

let arr = [1, 2, 3, 4];
console.log('Original values in the Array: ', arr);

// PUSH: Add new value to the END
arr.push(5);
console.log('Adding single element with push: ', arr);

arr.push(6, 7, 8); // Adding multiple elements at the END
console.log('Adding multiple elements with push: ', arr);

// POP: Remove from the END
arr.pop();
console.log('Removing last element with Pop:', arr);

// UNSHIFT: Adding value at the BEGINNING

arr.unshift(0);
console.log('Adding new element at 1st position using Unshift:', arr);

// SHIFT: Remove from the Beginning
arr.shift();
console.log('Removing 1st element using Shift:', arr);

// SPLICE: Adding or Removing elements from the Array
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...);

arr.splice(2, 1); // Removing 1 element from the 2nd position of the array
console.log("Array values after slicing the 2nd position element: ", arr);


arr.splice(1, 3); // Removing 3 elements from the 1st position of the array
console.log("Array values after slicing 3 elements from the 2nd position: ", arr);

arr.splice(2, 0, 22); // Adding a new element 22 at the position 2 without removing any element
console.log("Adding new element using splice: ", arr);

arr.splice(3, 1, 33, 44, 55); // Adding a new elements 33, 44, 55 at the position 3 by removing element from position 1
console.log("Adding multiple elements using splice: ", arr);

// Now let's use negative index with the slice function
// It will take place from the END of the array and will perform operations accordingly

arr.splice(-2, 3);
console.log("Splice with Negative index value to remove 3 elements where only 2 are present from the specified index: ", arr);

arr.splice(-3,3, 2, 3, 4, 5, 6);
console.log("Splice with Negative index to remove 3 values and adding new 5 values to array: ", arr);