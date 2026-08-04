# Interview Q&A for JavaScript + Playwright Learning Notes

This file is based on the examples from [chapter_02_Java_Concepts](../chapter_02_Java_Concepts), [chapter_03_Identifiers](../chapter_03_Identifiers), [chapter_04_Literals](../chapter_04_Literals), [chapter_05_Operators](../chapter_05_Operators), [chapter_06_Switch_Statement](../chapter_06_Switch_Statement), [chapter_07_If_Else_Statements](../chapter_07_If_Else_Statements), [chapter_08_Loops](../chapter_08_Loops), and [chapter_09_Arrays](../chapter_09_Arrays).

## 1. JavaScript Basics

### Q1. What is JavaScript?
**Answer:** JavaScript is a programming language used to make web pages interactive.

### Q2. What is the role of the V8 engine?
**Answer:** V8 is the JavaScript engine used by Chrome and Node.js. It runs JavaScript fast by converting it into machine code.

---

## 2. Variables and Data Types

### Q3. What is the difference between `null` and `undefined`?
**Answer:**
- `undefined` means a variable is declared but has no value yet.
- `null` means the value is intentionally empty.

### Q4. What are the main JavaScript data types?
**Answer:** String, Number, Boolean, Null, Undefined, Object, Symbol, and BigInt.

---

## 3. Operators

### Q5. What is the difference between `==` and `===`?
**Answer:**
- `==` checks only value.
- `===` checks both value and type.

### Q6. What is the ternary operator?
**Answer:** It is a short form of `if-else`.

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 4. Conditional Statements

### Q7. What is the difference between `if`, `else if`, and `else`?
**Answer:** They are used to run code based on conditions.

### Q8. What is a `switch` statement?
**Answer:** It is used when you want to compare one value against multiple cases.

---

## 5. Loops

### Q9. What is the difference between `for`, `while`, and `do...while`?
**Answer:**
- `for` is used when the number of iterations is known.
- `while` checks the condition before each loop.
- `do...while` runs at least once before checking the condition.

---

## 6. Arrays

### Q10. What is an array?
**Answer:** An array is used to store multiple values in one variable.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### Q11. What is the difference between `push()` and `pop()`?
**Answer:**
- `push()` adds an element to the end.
- `pop()` removes the last element.

### Q12. What is the difference between `unshift()` and `shift()`?
**Answer:**
- `unshift()` adds an element to the beginning.
- `shift()` removes the first element.

### Q13. What is `splice()` used for?
**Answer:** `splice()` is used to add, remove, or replace elements. It changes the original array.

### Q14. What is the difference between `splice()` and `slice()`?
**Answer:**
- `splice()` changes the original array.
- `slice()` creates a new array and does not change the original.

### Q15. What is the difference between `find()` and `filter()`?
**Answer:**
- `find()` returns the first matching value.
- `filter()` returns all matching values.

### Q16. What is the difference between `for...of` and `forEach()`?
**Answer:**
- `for...of` is a loop syntax for iterating values.
- `forEach()` executes a callback for each element.

### Q17. What is the difference between `indexOf()` and `includes()`?
**Answer:**
- `indexOf()` returns the index number or `-1`.
- `includes()` returns a boolean.

### Q18. How can you check if a value is an array?
**Answer:** Use `Array.isArray(value)`.

```js
let nums = [1, 2, 3];
console.log(Array.isArray(nums)); // true
```

### Q19. What is a shallow copy of an array?
**Answer:** A shallow copy creates a new array with the same values, but nested objects are still shared.

```js
let copy = [...nums];
```

### Q20. What is the difference between array literal and array constructor?
**Answer:**
- Array literal is written as `[1, 2, 3]` and is the preferred style.
- Array constructor uses `new Array(...)` and is less common.

---

## 7. Interview Tips

- Know the common array methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`.
- Practice small code examples by hand.
- Be clear about the difference between changing the original array and creating a new one.
- For automation interviews, explain logic simply and confidently.
