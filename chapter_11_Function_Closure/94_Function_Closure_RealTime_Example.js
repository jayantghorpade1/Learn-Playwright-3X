
// Example of 'Login Retry' mechanism

const { run } = require("node:test");

function maxRetryTracker(max){
    let attempts = 0;

    function tryAgain(testName){
        attempts++;

        if(attempts > max){
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));

/* 
CLOSURE CONCEPT EXPLANATION - LOGIN RETRY TRACKER:
This code demonstrates a "closure" used for tracking login retry attempts in real-time testing.

How it works:
1. maxRetryTracker(3) creates a retry tracker with a maximum of 3 attempts allowed
2. Inside, the 'attempts' variable is initialized to 0 - this is trapped in memory for this specific tracker
3. The inner tryAgain() function can access and increment 'attempts' even after maxRetryTracker returns
4. Each time runTCRetry() is called, 'attempts' increments by 1
5. If attempts exceed the max (3), it returns a failure message; otherwise, it shows current attempt status

Results:
- "Attempt 1/3 for Login"
- "Attempt 2/3 for Login"
- "Attempt 3/3 for Login"
- "Login exceeded max retries (3)"
- "Login exceeded max retries (3)"

This is a closure because the tryAgain() function "closes over" the 'attempts' variable permanently, 
maintaining its state across multiple function calls - perfect for tracking retry limits in testing!
*/