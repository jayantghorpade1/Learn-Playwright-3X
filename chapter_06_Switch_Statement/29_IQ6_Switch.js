let x = 10;

switch(x){
    case 10: 
    // only this block will get executed evne though there are 2 matching cases. 
    // It is b'coz of BREAK statement found in case 1
        let x = 1;
        console.log(x);
        break;
    case 10:
        let y = 2;
        console.log(y);
        break;
    default:
        console.log(x);
        break;
}