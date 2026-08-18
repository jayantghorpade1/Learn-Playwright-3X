
greet("Alice");

function greet(name){
    console.log('Hi');
    return `Hello, ${name}!`;
}

/**
 * Step-by-Step Code ExecutionLine 1 runs: 
 * greet("Alice") calls the function and passes the text "Alice" into it.
 * Inside the function:console.log('Hi') runs first, printing Hi to your screen.
 * return 'Hello, Alice!' creates a final text string and sends it back.
 * The result: The code finishes successfully. (Note: The returned text "Hello, Alice!" is sent back, 
 * but since there is no console.log on the first line, 
 * you won't see that specific greeting on your screen unless you wrap line 1 in a console.log()).
 * 
 * Expert Do's and Don'ts
 * 🟢 DO's
 * Do use standard function declarations like this if you want the flexibility to call a function before its written location in the file.
 * Do capture return values if you intend to use them later. 
 * For example: 
 * const message = greet("Alice");.
 * Do use backticks (`) for string interpolation (like `Hello, ${name}!`). 
 * It is clean, modern, and highly readable.
 * 
 * 
 * ❌ DON'Ts
 * Don't call functions before defining them as a general style rule, 
 * even though JavaScript allows it here. 
 * Placing your function calls below your function definitions makes your code much easier for other humans to read and track.
 * Don't confuse this with Arrow Functions. If you convert this to an arrow function (e.g., const greet = (name) => ...), 
 * hoisting will not work this way, 
 * and calling it on line 1 will crash your program with a ReferenceError.
 */