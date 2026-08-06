// Using hoisting concept with function 


function getUserStatus(){
    console.log(statusCode); // Undefined
    var statusCode = "Active";
    console.log(statusCode); // Active
}

getUserStatus();