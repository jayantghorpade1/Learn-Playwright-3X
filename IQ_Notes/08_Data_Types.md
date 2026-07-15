````markdown
# JavaScript Data Types

> **Definition:**  
> A **Data Type** specifies the kind of value that a variable can store in JavaScript.

```javascript
let age = 30;
```

Here,

- `age` → Variable
- `30` → Value
- `number` → Data Type

---

# Categories of Data Types

JavaScript has **8 built-in data types**, grouped into **2 categories**.

| Category | Data Types | Description |
|----------|------------|-------------|
| **Primitive (Value Types)** | `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol` | Store a single immutable value. |
| **Non-Primitive (Reference Type)** | `Object` | Store collections of data and are referenced by memory address. |

---

# 1. Primitive Data Types

Primitive data types are **immutable** and are copied **by value**.

| Data Type | Description | Example | `typeof` Result |
|-----------|-------------|---------|-----------------|
| **String** | Stores text | `"Hello"` | `"string"` |
| **Number** | Stores integers and decimals | `25`, `99.5` | `"number"` |
| **BigInt** | Stores very large integers | `12345678901234567890n` | `"bigint"` |
| **Boolean** | Stores `true` or `false` | `true` | `"boolean"` |
| **Undefined** | Variable declared but not assigned | `let x;` | `"undefined"` |
| **Null** | Intentionally empty value | `null` | `"object"` *(JavaScript bug)* |
| **Symbol** | Stores a unique identifier | `Symbol("id")` | `"symbol"` |

---

## String

Stores text.

```javascript
let name = "John";
```

---

## Number

Stores whole numbers and decimal numbers.

```javascript
let age = 30;
let price = 99.99;
```

---

## BigInt

Stores integers larger than the `Number` limit.

```javascript
let population = 12345678901234567890n;
```

---

## Boolean

Stores only two values.

```javascript
let isLoggedIn = true;
```

---

## Undefined

Variable is declared but no value is assigned.

```javascript
let city;

console.log(city);

// undefined
```

---

## Null

Represents an intentionally empty value.

```javascript
let user = null;
```

---

## Symbol

Creates a unique value.

```javascript
const id = Symbol("id");
```

---

# 2. Non-Primitive Data Type

Non-primitive data types are **mutable** and are copied **by reference**.

There is only **one** non-primitive data type in JavaScript:

| Data Type | Description | Example |
|-----------|-------------|---------|
| **Object** | Stores collections of data or complex structures | `{}`, `[]`, `function(){}` |

---

# Object

Stores data as **key-value pairs**.

```javascript
const person = {
    name: "John",
    age: 30
};
```

---

# Array

An array is a special type of object used to store multiple values.

```javascript
const fruits = ["Apple", "Mango", "Banana"];
```

```javascript
typeof fruits;

// "object"
```

---

# Function

Functions are also objects in JavaScript.

```javascript
function greet() {
    console.log("Hello");
}
```

```javascript
typeof greet;

// "function"
```

---

# Date

```javascript
const today = new Date();
```

---

# Map

Stores key-value pairs.

```javascript
const map = new Map();
```

---

# Set

Stores unique values.

```javascript
const set = new Set([1,2,3]);
```

---

# typeof Examples

| Expression | Output |
|------------|--------|
| `typeof "Hello"` | `"string"` |
| `typeof 100` | `"number"` |
| `typeof 100n` | `"bigint"` |
| `typeof true` | `"boolean"` |
| `typeof undefined` | `"undefined"` |
| `typeof null` | `"object"` ⭐ |
| `typeof Symbol()` | `"symbol"` |
| `typeof {}` | `"object"` |
| `typeof []` | `"object"` |
| `typeof function(){}` | `"function"` |

---

# Primitive vs Non-Primitive

| Feature | Primitive | Non-Primitive |
|----------|-----------|---------------|
| Stored By | Value | Reference |
| Mutable | ❌ No | ✅ Yes |
| Memory | Stack | Heap |
| Examples | String, Number | Object, Array, Function |
| Comparison | By Value | By Reference |

---

# Frequently Asked Interview Questions

| Question | Answer |
|-----------|--------|
| How many data types are available in JavaScript? | **8 built-in data types.** |
| How many primitive data types are there? | **7 primitive data types.** |
| How many non-primitive data types are there? | **1 non-primitive data type (`Object`).** |
| Is Array a separate data type? | **No. It is a special type of Object.** |
| Is Function a separate data type? | **No. Functions are Objects (though `typeof` returns `"function"`).** |
| Why does `typeof null` return `"object"`? | **It's a historical bug in JavaScript that has been retained for backward compatibility.** |
| Difference between Primitive and Non-Primitive? | **Primitive values are copied by value; Objects are copied by reference.** |

---

# Automation QE / Playwright Interview Focus ⭐⭐⭐⭐⭐

Know these thoroughly:

- ✅ `String`
- ✅ `Number`
- ✅ `Boolean`
- ✅ `Undefined`
- ✅ `Null`
- ✅ `Object`
- ✅ `Array`
- ✅ `Function`
- ✅ `typeof`
- ✅ Difference between Primitive and Non-Primitive
- ✅ Why `typeof null` returns `"object"`
- ✅ Arrays and Functions are Objects in JavaScript

---

# Quick Revision

| Primitive Data Types | Non-Primitive Data Types |
|----------------------|--------------------------|
| `String` | `Object` |
| `Number` | `Array` *(Object)* |
| `BigInt` | `Function` *(Object)* |
| `Boolean` | `Date` *(Object)* |
| `Undefined` | `Map` *(Object)* |
| `Null` | `Set` *(Object)* |
| `Symbol` | All custom objects |

> **Interview Tip:** Although **Array**, **Function**, **Date**, **Map**, and **Set** appear different, they are all **objects** internally in JavaScript. The only true non-primitive data type is **Object**.
````
