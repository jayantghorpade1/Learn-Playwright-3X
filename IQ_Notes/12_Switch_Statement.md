# 12. Switch Statement

Based on [31_Switch_Statement.js](../chapter_06_Switch_Statement/31_Switch_Statement.js), [26_Switch_Group.js](../chapter_06_Switch_Statement/26_Switch_Group.js), and [25_IQ3_API_ResponseCode_Switch.js](../chapter_06_Switch_Statement/25_IQ3_API_ResponseCode_Switch.js)

## 1) Core Idea

| Concept | Meaning |
|---|---|
| `switch` | Checks one expression against many cases |
| `case` | Matches a specific value |
| `break` | Stops further execution inside switch |
| `default` | Runs when no case matches |

## 2) Important Rules

| Rule | Important note |
|---|---|
| Comparison type | Uses strict comparison `===` |
| Case grouping | Multiple cases can share one block |
| Missing `break` | Causes fall-through to next case |
| `default` | Optional, but useful for fallback |

## 3) Common Examples

| Example | Use case |
|---|---|
| Day of week | Simple value-based branching |
| Browser group | Multiple values share same logic |
| API response code | Real-world status handling |

## Interview / Tricky Points
- `break` is very important; without it, multiple cases may execute.
- `switch` is best for fixed values, not complex conditions.
- Many interview questions test whether you know that `switch` uses strict matching.
