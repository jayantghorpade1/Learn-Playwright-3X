
//Old way of writing a function
function doubleMe(num){
    return num * 2;
}
console.log(doubleMe(5)); // Prints --> 10


//Arrow function
const doubleMeArrow = (num) => num * 2;
console.log(doubleMeArrow(5)); // Prints --> 10

// Without Arguments with Arrow function
const getEnv = () => "Staging";
console.log(getEnv());

// Multi line arrow function 

const getResult = (score) => {
    if(score >= 50) return "Pass";
    else return "Fail";
}
console.log(getResult(78)); // Prints --> Pass
console.log(getResult(45)); // Prints --> Fail