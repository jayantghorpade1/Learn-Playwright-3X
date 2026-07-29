
let num = [10, 20, 30, 40, 50];

let result = num.find(x => x > 20);
console.log(result);  // Output - 30

let index = num.findIndex(x => x > 20);
console.log(index);  // Finding index of 30 i.e. 2

let last = num.findLast(x => x > 20);
console.log(last);  // Output - 50

let lastIndex = num.findLastIndex(x => x > 20);
console.log(lastIndex);  // Index of last element - 4