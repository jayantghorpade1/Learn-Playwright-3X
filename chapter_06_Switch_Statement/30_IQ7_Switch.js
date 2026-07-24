
let flag = 0;
console.log(typeof(flag));  // Type = NUMBER

switch(flag){
    case false:
        console.log("FALSE matched");
        break;
    case 0:  // Switch follows strict match, hence this block will be printed
        console.log("0 matched");
        break;
}