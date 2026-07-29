
let arr = ["x", "y", "z"];

for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("********************");

for(let arr1 of arr){
    console.log(arr1);
}
console.log("********************");

arr.forEach((arr1, index) => {
    console.log(`${index}:${arr1}`);
} );