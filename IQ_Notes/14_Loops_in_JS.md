# 14. Loops in JavaScript

Based on [35_For_Loop.js](../chapter_08_Loops/35_For_Loop.js), [39_While_loop.js](../chapter_08_Loops/39_While_loop.js), and [41_Do_While_Loop.js](../chapter_08_Loops/41_Do_While_Loop.js)

## 1) Loop Types

| Loop | Best when | Key behavior |
|---|---|---|
| `for` | Number of iterations is known | Good for counting / indexing |
| `while` | Condition is checked first | May run zero times |
| `do...while` | Code must run at least once | Checks condition after execution |

## 2) Key Differences

| Feature | `for` | `while` | `do...while` |
|---|---|---|---|
| Initialization | Included in loop header | Outside loop | Outside loop |
| Condition check | Before each iteration | Before each iteration | After each iteration |
| Minimum execution | 0 times possible | 0 times possible | 1 time minimum |

## 3) When to Use Which

| Situation | Recommended loop |
|---|---|
| Iterating over a fixed range | `for` |
| Repeating until a condition changes | `while` |
| Repeating at least once before checking condition | `do...while` |

## Interview / Tricky Points
- Infinite loops are a common interview trap.
- `break` and `continue` change loop behavior and are frequently asked.
- For automation QE work, loops are often used for data-driven testing and repeated validations.
