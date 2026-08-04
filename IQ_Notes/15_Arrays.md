# 15. Arrays in JavaScript

Based on the examples in [chapter_09_Arrays](../chapter_09_Arrays).

## 1) What is an Array?

An array stores multiple values in one variable.

```js
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
```

## 2) How to Create an Array

```js
// 1. Array literal (most common)
const colors = ["Red", "Green", "Blue"];

// 2. Array constructor
const nums = new Array(1, 2, 3);

// 3. Array.of()
const values = Array.of(10, 20, 30);
```

### Important points
- Array index starts from 0.
- `length` gives the total number of elements.
- If you access a missing index, you get `undefined`.

## 3) Access and Modify Elements

```js
const cars = ["BMW", "Tata", "Mahindra"];
console.log(cars[0]);       // BMW
console.log(cars.at(-1));  // Mahindra

cars[1] = "Honda";         // modify value
console.log(cars);         // ["BMW", "Honda", "Mahindra"]
```

## 4) Add and Remove Elements

```js
let arr = [1, 2, 3];

arr.push(4);      // add at the end
arr.pop();        // remove from the end
arr.unshift(0);   // add at the start
arr.shift();      // remove from the start
```

## 5) Insert, Replace, or Remove in the Middle

```js
let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");
console.log(fruits); // ["Apple", "Mango", "Orange"]
```

- `splice(start, deleteCount, item...)` changes the original array.

## 6) Search in an Array

```js
let result = ["Pass", "Fail", "Skip", "Blocked"];
console.log(result.indexOf("Skip")); // 2
console.log(result.lastIndexOf("Fail")); // 1
console.log(result.includes("Pass")); // true
```

## 7) Find Elements

```js
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.find(x => x > 20));       // 30
console.log(numbers.findIndex(x => x > 20));  // 2
console.log(numbers.findLast(x => x > 20));   // 50
console.log(numbers.findLastIndex(x => x > 20)); // 4
```

## 8) Loop Through an Array

```js
let names = ["A", "B", "C"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}

names.forEach((name, index) => {
  console.log(index, name);
});
```

## 9) Transform an Array

```js
let nums = [3, 1, 2];

let doubled = nums.map(n => n * 2);      // [6, 2, 4]
let filtered = nums.filter(n => n > 1);  // [3, 2]
let total = nums.reduce((sum, n) => sum + n, 0); // 6
```

## 10) Slice, Concat, Sort

```js
let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b)); // [1, 2, 3, 4]
console.log(a.slice(0, 1)); // [1]

let nums2 = [3, 1, 2];
nums2.sort((a, b) => a - b);
console.log(nums2); // [1, 2, 3]
```

## 11) Check and Copy an Array

```js
let arr2 = [1, 2, 3];
console.log(Array.isArray(arr2)); // true

let copy = [...arr2]; // shallow copy
console.log(copy);
```

## 12) Destructuring

```js
let [first, ...rest] = ["a", "b", "c"];
console.log(first); // a
console.log(rest);  // ["b", "c"]
```

## 13) Interview Notes

- `splice()` changes the original array.
- `slice()` creates a new array and does not change the original.
- `push()` and `pop()` work at the end.
- `unshift()` and `shift()` work at the start.
- `map()`, `filter()`, and `reduce()` are very common interview topics.
- `find()` returns the first matching value, while `filter()` returns all matching values.
