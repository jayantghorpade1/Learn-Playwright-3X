// Scope of Functions:      

let env = "Staging";  // Global scope

function setupConfig(){
    let timeOut = 3000;    // Local scope
    console.log(env);      // Can access Global
    console.log(timeOut);  // Can access Local
}

setupConfig();
console.log(env);  // Can be accessed as it is Global
console.log(timeOut);   // Can not be accessed, Reference Error
