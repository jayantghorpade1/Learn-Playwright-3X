# JavaScript Ternary Operators

This note explains the ternary operator in a simple and interview-friendly way using examples from [chapter_05_Operators/11_Ternary_Operators.js](chapter_05_Operators/11_Ternary_Operators.js) and [chapter_05_Operators/17_Nested_Ternary_Operator.js](chapter_05_Operators/17_Nested_Ternary_Operator.js).

---

## Basic Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

## Important Points

| Topic | Meaning | Example | Interview Note |
|------|---------|---------|----------------|
| Ternary Operator | Short form of `if-else` | `age > 18 ? "Yes" : "No"` | Used for simple conditions with two outcomes |
| Conditional Check | Evaluates a condition and returns one of two values | `age > 18 ? "Eligible" : "Not Eligible"` | Very compact and readable for small logic |
| Nested Ternary | One ternary inside another | `number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero"` | Useful for multiple conditions, but less readable |
| Best Use Case | Quick decision-making | `score >= 90 ? "A" : ...` | Good for simple checks, not complex logic |
| Return Value | It returns a value, so it can be assigned to a variable | `let result = condition ? "A" : "B"` | Important interview concept |

---

## Quick Summary

- Ternary operator is a shorthand for `if-else`.
- It is written as `condition ? trueValue : falseValue`.
- It is best for simple conditions.
- Nested ternaries are allowed, but avoid them for very complex logic.
- In interviews, remember that it returns a value and can be assigned directly.
