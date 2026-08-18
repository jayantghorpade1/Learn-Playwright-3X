
sayHi("Bob"); 
// TypeError: sayHi is not a function, ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function(name){
    return `Hi, ${name}!!!`;
}