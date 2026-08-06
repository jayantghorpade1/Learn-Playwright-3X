/*
=========================================
Temporal Dead Zone (TDZ)
=========================================

Definition:
- TDZ is the time between entering a scope and the point where
  a let or const variable is declared.
- During this period, the variable exists but cannot be accessed.

Easy Remember:
TDZ = Variable exists, but you cannot use it yet.

/*
=========================================
Temporal Dead Zone (TDZ)
=========================================

Definition:
- TDZ is the time between entering a scope and the point where
  a let or const variable is declared.
- During this period, the variable exists but cannot be accessed.

Easy Remember:
TDZ = Variable exists, but you cannot use it yet.

Enter Scope
     │
     ▼
 TDZ Starts
     │
console.log(age)
     │
❌ ReferenceError
     │
let age = 25
     │
TDZ Ends
     │
age can now be used

*/




/**
| Feature                         |        `var`          |      `let`     |     `const`    |
| ------------------------------- | :-----------------:   | :------------: | :------------: |
| Hoisted                         |        ✅ Yes         |      ✅ Yes     |      ✅ Yes     |
| Accessible before declaration   | ✅ Yes (`undefined`)  |   ❌ No (TDZ)   |   ❌ No (TDZ)   |
| Initial value before assignment |     `undefined`       | Not accessible | Not accessible |
| Interview Friendly              |       ❌ Avoid       |      ✅ Yes     |     ✅ Best     |

 */