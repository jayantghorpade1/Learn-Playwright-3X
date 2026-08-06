
var a = "Jay";

if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}

// Explanation:
// - `var a` is hoisted to the top of the scope, so inside the if-block the first `console.log(a)` sees
//   the hoisted variable as `undefined`.
// - After `a = "temp"`, the second `console.log(a)` prints `temp`.
// Output:
//   undefined
//   temp

// Similar example with let:
let b = "Jay";
if(true){
    // `b` is block-scoped and in the temporal dead zone until the declaration.
    let b = "temp";
    console.log(b); // temp
}
console.log(b); // Jay

// Similar example with const:
const c = "Jay";
if(true){
    // `c` is also block-scoped and has TDZ until the declaration.
    const c = "temp";
    console.log(c); // temp
}
console.log(c); // Jay