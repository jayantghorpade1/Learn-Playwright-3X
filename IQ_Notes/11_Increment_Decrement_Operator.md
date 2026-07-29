# 11. Increment / Decrement Operators + Nullish Coalescing

Based on [21_Increment_Decrement_Operators.js](../chapter_05_Operators/21_Increment_Decrement_Operators.js) and [22_Null_Coalesing_Operator.js](../chapter_05_Operators/22_Null_Coalesing_Operator.js)

## 1) Increment / Decrement Basics

| Operator | Type | Meaning | Example | Result |
|---|---|---|---|---|
| `++x` | Pre-increment | Increase first, then use | `let x=10; let y=++x;` | `y=11`, `x=11` |
| `x++` | Post-increment | Use first, then increase | `let m=20; let n=m++;` | `n=20`, `m=21` |
| `--x` | Pre-decrement | Decrease first, then use | `let a=10; let b=--a;` | `b=9`, `a=9` |
| `x--` | Post-decrement | Use first, then decrease | `let d=20; let e=d--;` | `e=20`, `d=19` |

## 2) ERT Table (Important for interviews)

| Expression | What happens | Final value |
|---|---|---|
| `++j + j` | value is updated before use | `22` when `j=10` |
| `++k + k + k++` | careful with mixed operators | often tricky in dry run |
| `i++ + i + ++i` | old value, then updated value | common interview trap |
| `--p + p--` | decrement before and after use | common trap for evaluation order |

## 3) Nullish Coalescing (`??`)

| Situation | Example | Output |
|---|---|---|
| Left side is `null` or `undefined` | `user ?? "Anonymous"` | Right side |
| Left side has a real value | `user ?? "Anonymous"` | Left side |

### Key point
- `??` is used for `null` or `undefined` only.
- It is different from `||` because `0`, `""`, and `false` are not treated as missing.

## Interview / Tricky Points
- Pre/post operators behave differently when used in assignments or expressions.
- Dry-run questions are very common for automation engineers.
- `??` is safer than `||` when `0` or empty string is a valid value.
