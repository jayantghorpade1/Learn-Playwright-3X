/* Switch Statement in Java Statement
* The Swtich statement evaluates the expression once and
* then compare it against multiple case values.
* Expression --> case1, case2, case3......Default
* When a match is found the appropriate matching case code gets run.
*
* Switch uses STRICT Comparison ( === )
*
*   switch(expression){
*       case value_1:
*       // code block
*       break;  //control goes out of Switch once the case is match and does not execute further case
*       
*       case value_2:
*       // code block
*       break;
*
*       default:
*       // code block runs if NO Case matches
*       break;
*   }
*/

let day = 3;

switch(day){
    case 1:
        console.log("1 is Monday");
        break;
    case 2:
        console.log("2 is Tuesday");
        break;
    case 3:
        console.log("3 is Wednesday");
        break;
    case 4:
        console.log("4 is Thursday");
        break;
    case 5:
        console.log("5 is Friday");
        break;
    case 6:
        console.log("6 is Saturday");
        break;
    case 7:
        console.log("7 is Sunday");
        break;
    default:
        console.log("it is a FUN DAY");
        break;
}