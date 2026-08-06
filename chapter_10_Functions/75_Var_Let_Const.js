/*
=========================================
var vs let vs const
=========================================

var
- Old way of declaring variables (before ES6).
- Can be reassigned.
- Can be redeclared.
- Function scoped (behaves like a traitor)
- Avoid using in modern JavaScript.

let
- Introduced in ES6.
- Can be reassigned.
- Cannot be redeclared in the same scope.
- Block scoped.
- Use when the value needs to change.

const
- Introduced in ES6.
- Cannot be reassigned.
- Cannot be redeclared.
- Block scoped.
- Preferred choice in modern JavaScript.

Easy Rule:

const → Default choice
let   → When value changes
var   → Avoid
*/

// Example of var

var a = 10;
console.log(a);  // Outout: 10

function printA(){
    console.log("Lets see the value of a");

    var a = 20;
    console.log(a); // Outout: 20

    if(true){
        var a = 30;
        console.log("We are inside of IF block");
        console.log(a);  // Outout: 30
    }
    console.log("We are out of IF block");
    console.log(a); // we are out of IF block now but it will still print 30
}

printA();

// --------------------------------------------------------

// let example
let b = 10; // Global scope
console.log(b);  // Outout: 1

function printB(){
    console.log("Lets see the value of b");

    let b = 20; // Local scope, limited to function
    console.log(b); // Outout: 20

    if(true){
        let b = 30;
        console.log("We are inside of IF block");
        console.log(b);  // Outout: 30
    }
    console.log("We are out of IF block");
    console.log(b); // we are out of IF block now but it will still print 20
}

printB();
console.log("We are out of function PrintB and the value of b is: ", b);

// --------------------------------------------------------

// const example
const pi = 3.14;
console.log(pi);

/*
pi = 3.14150; // value of a constant variable can not be changed once defined
console.log(pi);

let pi = 3.1420202; // pi is already declared and hence it is not allowed
console.log(pi);
*/

// we can push a new value in CONSTANT array
const arr = [1, 2, 3];
console.log("Constant array arr before pushing a new value : ",arr);
arr.push(4)
console.log("Constant array arr after pushing a new value 4 : ",arr);