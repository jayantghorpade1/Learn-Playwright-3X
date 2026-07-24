/**
 * WHILE Loop will be executed only when the condition is TRUE
 * that means it can be completely ignored if the condition is FALSE 
 * BUT
 * DO WHILE loop will be executed at least once as the control enters the block before checking the condition
 */

let num = 10;
console.log("***** START OF WHILE LOOP *****")
while(num<10){
    console.log(num);
    num++;
}
console.log("***** END OF WHILE LOOP *****")

let num1 = 10;
console.log("***** START OF DO_WHILE LOOP *****")
do{
    console.log(num1);
    num1++;
} while(num1<10);
console.log("***** END OF DO_WHILE LOOP *****")