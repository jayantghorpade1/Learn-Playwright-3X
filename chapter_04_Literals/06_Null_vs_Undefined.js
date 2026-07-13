
/**
 * --------------------------------------------------------------------------
 * Topic: Difference between NULL and UNDEFINED in JavaScript
 * --------------------------------------------------------------------------
 * Undefined: A variable that has been declared but has not yet been assigned a value is of type undefined. It indicates the absence of a value or that the variable is uninitialized.
 * Null: Null is an assignment value that represents the intentional absence of any object value. It is an object type and is used to indicate that a variable should have no value.
 * 
 * Key Differences:
 * 1. Type: Undefined is a type itself, while null is an object type.
 * 2. Assignment: Undefined is the default value for uninitialized variables, while null is explicitly assigned to a variable to indicate no value.
 * 3. Usage: Undefined is often used by the JavaScript engine to indicate that a variable has not been assigned a value, while null is used by developers to indicate that a variable should have no value.
 * 4. Comparison: When using the equality operator (==), null and undefined are considered equal, but when using the strict equality operator (===), they are not equal.    
 * 
 * /*
+----------------------+-------------------------------+--------------------------------------+
| Feature              | undefined                     | null                                 |
+----------------------+-------------------------------+--------------------------------------+
| Meaning              | Variable declared but         | Intentionally assigned               |
|                      | not assigned a value          | an empty value                       |
+----------------------+-------------------------------+--------------------------------------+
| Who sets it?         | JavaScript automatically      | Developer manually                   |
+----------------------+-------------------------------+--------------------------------------+
| Default Value        | Yes                           | No                                   |
+----------------------+-------------------------------+--------------------------------------+
| Memory Allocated?    | Variable exists               | Object reference intentionally empty |
+----------------------+-------------------------------+--------------------------------------+
| Represents           | Missing value                 | Empty object reference               |
+----------------------+-------------------------------+--------------------------------------+
| typeof               | "undefined"                   | "object"                             |
+----------------------+-------------------------------+--------------------------------------+
| == Comparison        | null == undefined             | true                                 |
+----------------------+-------------------------------+--------------------------------------+
| === Comparison       | null === undefined            | false                                |
+----------------------+-------------------------------+--------------------------------------+
| Best Use Case        | Uninitialized variable        | Explicitly clearing/resetting value  |
+----------------------+-------------------------------+--------------------------------------+
 * 
 **/

var undefinedVariable; // This variable is declared but not assigned a value, so it is undefined

var nullVariable = null; // This variable is explicitly assigned a value of null, indicating no value   

console.log("Undefined Variable --> ", undefinedVariable, " || Type --> ", typeof undefinedVariable); // Output: Undefined Variable: undefined Type: undefined
console.log("Null Variable --> ", nullVariable, " || Type --> ", typeof nullVariable); // Output: Null Variable: null Type: object  

