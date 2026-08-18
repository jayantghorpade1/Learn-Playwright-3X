
let global_x = 10;

function outer(){
    let x = 20;

    function inner(){
        let y = 30;
        console.log(x);  // Inner can access the variable from the Outer function
    }

    inner();
    console.log(x);   // Accessible
   // console.log(y);   // Not accessible, outer function does not have access to the inner function variable 
}

outer();
console.log(global_x);

