# JavaScript String Operators

This note explains the string-related concepts used in [chapter_05_Operators/10_String_Operators.js](chapter_05_Operators/10_String_Operators.js) in a simple and easy-to-read format.

---

## What is a String?

A string is a sequence of characters used to store text.

```javascript
let name = "John";
```

---

## String Operators and String Concepts

| Topic | Meaning | Example | Output / Result |
|------|---------|---------|------------------|
| Concatenation Operator `+` | Joins two or more strings together | `"Hello" + " World"` | `Hello World` |
| Concatenation Assignment `+=` | Adds a string to an existing string | `str += " World"` | Appends text |
| Template Literals | Writes strings with variables inside `${}` | `` `My name is ${name}` `` | Dynamic text |
| Comparison Operators | Compares strings based on character order | `"apple" < "banana"` | `true` |
| Strict Equality `===` | Checks whether two strings are exactly equal | `"apple" === "banana"` | `false` |
| Length Property | Returns the number of characters in a string | `"Hello".length` | `5` |
| Indexing | Accesses a character at a specific position | `"Hello"[0]` | `H` |
| `toUpperCase()` | Converts string to uppercase | `"Hello".toUpperCase()` | `HELLO` |
| `toLowerCase()` | Converts string to lowercase | `"Hello".toLowerCase()` | `hello` |

---

## 1. Concatenation Operator `+`

This operator combines two strings.

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;

console.log(result); // Hello World
```

---

## 2. Concatenation Assignment `+=`

This operator appends a string to an existing string.

```javascript
let str3 = "Hello";
str3 += " World";

console.log(str3); // Hello World
```

---

## 3. Template Literals

Template literals use backticks and allow variables inside the string.

```javascript
let name = "John";
let age = 30;

let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);
```

---

## 4. String Comparison Operators

JavaScript compares strings using character values.

```javascript
let str4 = "apple";
let str5 = "banana";

console.log(str4 < str5); // true
console.log(str4 > str5); // false
console.log(str4 === str5); // false
```

---

## 5. String Length

The `length` property tells us how many characters are in a string.

```javascript
let str6 = "Hello World";
console.log(str6.length); // 11
```

---

## 6. String Indexing

Each character in a string can be accessed using its index number.

```javascript
let str7 = "Hello";
console.log(str7[0]); // H
console.log(str7[4]); // o
```

> Note: Indexing starts from `0`.

---

## 7. String Methods

JavaScript provides built-in methods to work with strings.

```javascript
let str8 = "Hello World";
console.log(str8.toUpperCase()); // HELLO WORLD
console.log(str8.toLowerCase()); // hello world
```

---

## Quick Summary

| Concept | Use |
|---------|-----|
| `+` | Join strings |
| `+=` | Append strings |
| Template Literals | Insert values into strings |
| Comparison Operators | Compare strings |
| `length` | Count characters |
| Indexing | Access a character |
| `toUpperCase()` / `toLowerCase()` | Change letter case |

---

## Interview Tip

Always remember:

- `+` is used for joining strings.
- `+=` is used to add to an existing string.
- Template literals are more readable than normal string concatenation.
- String comparison is based on character order, not just the spelling.
