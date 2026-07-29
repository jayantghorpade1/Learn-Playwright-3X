# 15. Arrays in JavaScript

Based on [chapter_09_Arrays/46_Arrays_Basics.js](../chapter_09_Arrays/46_Arrays_Basics.js), [chapter_09_Arrays/47_Array_Functions.js](../chapter_09_Arrays/47_Array_Functions.js), [chapter_09_Arrays/49_Array_Accessing_Modifying.js](../chapter_09_Arrays/49_Array_Accessing_Modifying.js), and [chapter_09_Arrays/50_Array_Adding_Removing_Elements.js](../chapter_09_Arrays/50_Array_Adding_Removing_Elements.js)

## 1) What is an Array?

An array is used to store multiple values in one variable.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### Important points
- Arrays are zero-based: first element index is `0`.
- They are mutable, so values can be changed.
- They can store different data types in one array.

```js
const data = [10, "JavaScript", true, null];
```

## 2) Array Concepts Most Asked in Interviews

### Indexing
```js
const cars = ["BMW", "Tata", "Mahindra"];
console.log(cars[0]); // BMW
console.log(cars[2]); // Mahindra
```

### Accessing last element
```js
console.log(cars.at(-1)); // Mahindra
```

### Modify value
```js
cars[1] = "Honda";
console.log(cars); // ["BMW", "Honda", "Mahindra"]
```

### Length
```js
console.log(cars.length); // 3
```

## 3) Most Used Array Methods

### `push()` → add at the end
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

### `pop()` → remove from the end
```js
arr.pop();
console.log(arr); // [1, 2, 3]
```

### `unshift()` → add at the beginning
```js
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]
```

### `shift()` → remove from the beginning
```js
arr.shift();
console.log(arr); // [1, 2, 3]
```

### `splice()` → add/remove/replace anywhere
```js
const fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");
console.log(fruits); // ["Apple", "Mango", "Orange"]
```

## 4) Interview / Automation Tips

- Arrays are heavily used in test automation for storing test data, expected results, and UI element values.
- `splice()` changes the original array; `slice()` does not.
- `push()` and `pop()` are commonly used for stack-style operations.
- `length` is very important for loops and validations.

## 5) Short Summary

- Array = collection of values in one variable.
- Use index to access values.
- Use `push`, `pop`, `unshift`, `shift`, and `splice` for common operations.
- Very important for JavaScript interviews and automation scripting.
