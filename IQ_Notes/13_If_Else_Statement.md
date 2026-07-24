# 13. If / Else and Nested If / Else

Based on [32_IF_ELSE_Statement.js](../chapter_07_If_Else_Statements/32_IF_ELSE_Statement.js), [33_Multi_Condition_If_Else.js](../chapter_07_If_Else_Statements/33_Multi_Condition_If_Else.js), and [34_Nested_If_Else_Statement.js](../chapter_07_If_Else_Statements/34_Nested_If_Else_Statement.js)

## 1) Main Concepts

| Statement | Use case | Example |
|---|---|---|
| `if` | Run code when condition is true | `if (age >= 18)` |
| `else` | Run when `if` is false | fallback logic |
| `else if` | Check multiple conditions in order | grade logic |
| Nested `if` | Put one condition inside another | student discount example |

## 2) Key Points

| Topic | Important note |
|---|---|
| Condition result | Must evaluate to `true` or `false` |
| Order matters | First true condition wins |
| Readability | Nested conditions can become hard to maintain |
| Braces | Recommended even for single-line blocks |

## Interview / Tricky Points
- `else if` is checked only if previous conditions fail.
- `==` and `===` are different; `===` is safer and more commonly preferred.
- In automation testing, nested conditions often appear in business-rule logic and test data handling.
