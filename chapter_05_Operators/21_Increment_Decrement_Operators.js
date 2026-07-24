/*
* Increment & Decrement Operators:
1. Pre-Increment  :   ++a;      Increment First         Expression return new value     
2. Post-Increment :   a++;      Increment After         Expression return old value
3. Pre-Decrement  :   --a;      Decrement First         Expression return new value
4. Post-Decrement :   a--;      Decrement After         Expression return old value

*
*/

// Pre-increment
console.log("\n******* Pre-increment *******\n")
let x = 10;
console.log("Real value of X at the beginning: ", x);
let y = ++x;
console.log("Value of Y: ", y);
console.log("New value in the variable X after pre-increment: ", x);

// Post-increment
console.log("\n******* Post-increment *******\n")
let m = 20;
console.log("Real value of M at the beginning: ", m);
let n = m++;
console.log("Value of N: ", n);
console.log("New value in the variable M after post-increment: ", m);

// Pre-decrement
console.log("\n******* Pre-decrement *******\n")
let a = 10;
console.log("Real value of A at the beginning: ", a);
let b = --a;
console.log("Value of B: ", b);
console.log("New value in the variable X after pre-decrement: ", a);

// Post-decrement
console.log("\n******* Post-decrement *******\n")
let d = 20;
console.log("Real value of D at the beginning: ", d);
let e = d--;
console.log("Value of E: ", e);
console.log("New value in the variable D after post-decrement: ", d);

console.log("-------------------------------------------------");

// Example 1
let j = 10;
console.log(++j + j); 
//Here, Initally 'j' holds value 10, then
// pre-increments operation update the value of 'j' to 11
// therefore 11 + 11 will be 22 to be printed
console.log(j); //this will print 'j' as 11

// Example 2
let k = 5;
console.log(++k + k + k++); // 6 + 6 + 6 = 18 after this the value of K will be incremented to 7
console.log(k); //7

// Example 3
let i = 20;
console.log(i++ + i + ++i); //Here, 20 + 21 + 22 = 63 after this the value of I will be 22
console.log(i); //22

// Example 4
let s = 5;
console.log(s++ + ++s + s++ + ++s ); //5 + 7 + 7 + 9 = 28;
console.log(s); // 9

// Example 5
let p = 37;
console.log(--p + p--); // 36 + 36 = 72;
console.log(p); // 35

// Example 6
let q = 11;
console.log(a-- - --a); // 11 - 9 = 2
console.log(q); // 9

// Example 7
let i1 = 1;
let r = i1++ > 1 ? i1++ : ++i1;

/**
 * Complete Dry Run
Step	            Expression	        Value Used	        'i' After Evaluation
Initial	            i = 1	            —	                    1
Condition	        i++ > 1	            1 > 1 → false	        2
False branch	    ++i	                3	                    3
Assignment	        r = 3	            3	                    3
 */

console.log(r, i); // 3  3

// Example 8
let num1 = 10;
let num2 = --num1;

console.log(num2); // 9
console.log(num1); // 9

let num3 = 10;
let num4 = num3--;

console.log(num4); //10
console.log(num3); //9





