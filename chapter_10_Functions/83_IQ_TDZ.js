
let a = 10;
console.log(a);

if(true){
    console.log(a);
    let a = 20;
}

// Explanation:
// - The first `console.log(a)` prints 10.
// - Inside the if-block, `let a = 20` creates a new block-scoped `a`.
// - The second `console.log(a)` runs before that block-scoped `a` is initialized,
//   so it causes a ReferenceError because the variable is in the temporal dead zone.
// Output:
//   10
//   ReferenceError: Cannot access 'a' before initialization