# Interview Q&A for JavaScript + Playwright Learning Notes

This document is created from the topics and examples available in the project folders such as [chapter_02_Java_Concepts](../chapter_02_Java_Concepts), [chapter_03_Identifiers](../chapter_03_Identifiers), [chapter_04_Literals](../chapter_04_Literals), [chapter_05_Operators](../chapter_05_Operators), [chapter_06_Switch_Statement](../chapter_06_Switch_Statement), [chapter_07_If_Else_Statements](../chapter_07_If_Else_Statements), [chapter_08_Loops](../chapter_08_Loops), and [chapter_09_Arrays](../chapter_09_Arrays).

## 1. JavaScript Basics

### Q1. What is JavaScript?
**Answer:** JavaScript is a lightweight, interpreted or just-in-time compiled language used to make web pages interactive.

### Q2. What is the difference between source code, bytecode, and machine code?
**Answer:**
- Source code is human-readable code written by developers.
- Bytecode is an intermediate form executed by a runtime.
- Machine code is binary instructions executed by the CPU.

### Q3. What is the role of the V8 engine?
**Answer:** V8 is the JavaScript engine used by Chrome and Node.js. It compiles JavaScript into machine code for fast execution.

### Example
```js
console.log("Hello World");
```

---

## 2. Literals and Identifiers

### Q4. What is a literal?
**Answer:** A literal is a fixed value written directly in code, such as `10`, `"Hello"`, or `true`.

### Q5. What is an identifier?
**Answer:** An identifier is the name given to variables, functions, or objects.

### Example
```js
let age = 25; // age is an identifier
```

### Interview Tip
- Identifiers must follow naming rules.
- They cannot start with a digit.
- They should be meaningful and readable.

---

## 3. Variables and Data Types

### Q6. What is the difference between `null` and `undefined`?
**Answer:**
- `undefined` means a variable is declared but has no value assigned.
- `null` means the variable is intentionally empty.

### Example
```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

### Q7. What are the main JavaScript data types?
**Answer:**
- String
- Number
- Boolean
- Null
- Undefined
- Object
- Symbol
- BigInt

---

## 4. Operators

### Q8. What is the difference between `==` and `===`?
**Answer:**
- `==` compares values after type conversion.
- `===` compares both value and type.

### Example
```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

### Q9. What is the ternary operator?
**Answer:** It is a short form of `if-else` written as:

```js
condition ? trueValue : falseValue;
```

### Q10. What is the nullish coalescing operator (`??`)?
**Answer:** It returns the right-hand side when the left-hand side is `null` or `undefined`.

```js
let value = null ?? "Default";
console.log(value); // Default
```

---

## 5. Conditional Statements

### Q11. What is the difference between `if`, `else if`, and `else`?
**Answer:** They are used to execute code based on conditions. `else if` checks additional conditions, and `else` handles all remaining cases.

### Example
```js
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Q12. What is a switch statement?
**Answer:** It is used to select one of many code blocks based on a value.

### Example
```js
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
}
```

---

## 6. Loops

### Q13. What is the difference between `for`, `while`, and `do...while` loops?
**Answer:**
| Loop | When to use |
|---|---|
| `for` | When the number of iterations is known |
| `while` | When condition is checked before each iteration |
| `do...while` | When the code must run at least once |

### Q14. What is the purpose of `break` and `continue`?
**Answer:**
- `break` stops the loop completely.
- `continue` skips the current iteration and moves to the next one.

### Example
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

---

## 7. Arrays

### Q15. What is an array?
**Answer:** An array is a special data structure used to store multiple values in a single variable.

### Example
```js
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
```

### Q16. What is the difference between `push()` and `pop()`?
**Answer:**
- `push()` adds an element to the end.
- `pop()` removes the last element.

### Q17. What is the use of `splice()`?
**Answer:** `splice()` is used to add, remove, or replace elements from an array.

### Example
```js
let arr = [1, 2, 3];
arr.splice(1, 1, 99);
console.log(arr); // [1, 99, 3]
```

### Q18. What is the difference between `splice()` and `slice()`?
**Answer:**
- `splice()` changes the original array.
- `slice()` creates a new array and does not change the original.

---

## 8. Important Interview Table

| Topic | Very Important for Interviews | Common in Automation |
|---|---|---|
| Variables and scope | Yes | Yes |
| `==` vs `===` | Yes | Yes |
| Ternary operator | Yes | Yes |
| `if/else` and `switch` | Yes | Yes |
| Loops | Yes | Yes |
| Arrays and methods | Yes | Yes |
| `null` vs `undefined` | Yes | Yes |

---

## 9. Simple Execution Flow Diagram

```text
User Action
   ↓
Browser / Node.js
   ↓
JavaScript Engine (V8)
   ↓
Execution Context
   ↓
Code Runs
```

---

## 10. Short Final Notes

- Always write clean and readable code.
- Understand the difference between value comparison and type comparison.
- Know the most used array methods: `push`, `pop`, `shift`, `unshift`, and `splice`.
- For automation interviews, be ready to explain loops, conditions, and data handling clearly.
