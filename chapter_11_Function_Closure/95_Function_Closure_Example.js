
function makeRateLimiter(limit){

    let call = 0;

    function check(){
        call++;
        return call <= limit;
    }
    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

/* 
CLOSURE CONCEPT EXPLANATION:
This code demonstrates a "closure" - a function that remembers variables from its parent function's scope.

How it works:
1. makeRateLimiter(3) creates a rate limiter with a limit of 3 calls
2. Inside, the 'call' variable is initialized to 0 - this variable is "trapped" in memory
3. The inner check() function can access and increment 'call' even after makeRateLimiter returns
4. Each time limiter() is called, 'call' increments by 1
5. It returns true if call <= limit (3), false otherwise

Results: true, true, true, false, false
- First 3 calls succeed (1≤3, 2≤3, 3≤3)
- Next 2 calls fail (4>3, 5>3)

This is a closure because the check() function "closes over" and maintains access to the 'call' variable permanently.
*/