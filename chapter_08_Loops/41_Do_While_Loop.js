/**
 * Do While Loop
 * It will always execute AT LEAST ONCE
 */

let retry = 0;

do{ // This block will get executed at least once
    console.log("Execute a code!!!");
    console.log("Retrying.....", retry);
    retry++;
} while(retry<=3); // The Do block execution will be stopped when WHILE condition becomes FALSE
