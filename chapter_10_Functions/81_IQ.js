
let name = "abc";  // Global scope

if(true)
{ // Entering into Block zone
    console.log(name); // Error - Temporal Dead Zone as it is not defined 
    let name = "xyz";
}
console.log(name);

/**
 * Let is a blocked scope
 */ 

// TDZ - Temporal Dead Zone

// 