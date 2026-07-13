# Null vs. Undefined

## Definitions
- `null`: `null` is an intentional empty value.
- `undefined`: `undefined` means a variable is declared but has no assigned value.

## Quick Example
```js
let user;          // undefined
const role = null; // null
console.log(user, role);
```

## Visual Map
![Null vs Undefined](04_Null_vs_Unidentified_Visual.svg)

## Breakdown Matrix

| Aspect | `null` | `undefined` | Interview Gotcha |
|---|---|---|---|
| `typeof` | `"object"` | `"undefined"` | `typeof null` is a classic trap. |
| Explicit Intent | Intentional empty state | Missing assignment | `null` is chosen; `undefined` is usually accidental. |
| Loose Equality (`==`) | `true` with `undefined` | `true` with `null` | Loose equality hides the difference. |
| Strict Equality (`===`) | `false` with `undefined` | `false` with `null` | Use `===` for precise checks. |
| Arithmetic Behavior | `1 + null` => `1` | `1 + undefined` => `NaN` | Numeric behavior differs sharply. |
