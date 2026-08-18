
/**
 * Functions inside a Block is not a good practice therefore don't do it.
 * 
 * Functions can be declared inside conditional blocks, 
 * but avoid doing so when the function needs to be used outside that block. 
 * Define the function at the appropriate outer scope and use the condition to control its execution. 
 * 
 * This is problematic because JavaScript handles Function Declarations during 
 * the compile/hoisting phase before the code actually executes line-by-line.
 * */ 

// BAD (Inconsistent behavior across the browsers)

if(true){
    function test(){
        return"inside if";
    }
}

// GOOD (Use Function Expressions)

let test;

if(true){
    test = function(){
        return "inside if";
    }
}
console.log(test());  //Output: inside if