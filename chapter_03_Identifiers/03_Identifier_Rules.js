/*
 * JS is a Case Sensitive Language 
 */

// Allowed ways to declare identifiers

var a = 10;
var A = 20;
var $ = 30;
var _a = 40;
var _ = 50;
var num = 60;
var abc123 = 70;

var Name = "John";
var name = "Doe";
var UserName = "John Doe";
var userName = "John Doe";
var user_name = "John Doe";
var user_name_123 = "John Doe";
var user$Name = "John Doe";

/*
----------------------------------------------------------------------
Allowed ways to declare identifiers with different naming conventions
----------------------------------------------------------------------
*/

//camel Case - Standard way to declare identifiers & functions in JS
var camelCase = "This is camel case";
let totalPrice = 100;
let isLoggedIn = true;

//Pascal Case - Standard way to declare Classes & Constructors   in JS
class User {
  constructor(name) {
    this.name = name;
  }
}

var PascalCase = "This is Pascal case";

// Snake Case - Standard way to declare identifiers in Python, Ruby, etc    
var snake_case = "This is snake case";
var total_price = 100;
var is_logged_in = true;

//Screaming Snake Case - Standard way to declare constants in JS
const SCREAMING_SNAKE_CASE = "This is screaming snake case";
const MAX_VALUE = 100;
const IS_LOGGED_IN = true;

//Hungarian Notation - Standard way to declare identifiers in C#, Java, etc
var strUserName = "John Doe";
var intTotalPrice = 100;
let boolIsLoggedIn = true;
let arrUserList = ["John", "Jane", "Doe"];


/*
----------------------------------------------------------------------
Not-Allowed ways to declare identifiers with different naming conventions
----------------------------------------------------------------------
*/

var kebab_case = "This is kebab case"; // Not allowed in JS

var user name = "John Doe"; // In between SPACE is Not allowed in JS


/*
----------------------------------------------------------------------
Important Note: from the interview perspective
----------------------------------------------------------------------
*/

// Valid
let validName = "John Doe"; // Valid identifier
let _validName = "John Doe"; // Valid identifier - Can start with an underscore
let $validName = "John Doe"; // Valid identifier - Can start with a dollar sign 
let item1 = "John Doe"; // Valid identifier - Can start with a letter and can contain numbers 
let _item2 = "John Doe"; // Valid identifier - Can start with an underscore and can contain numbers 
let $item3 = "John Doe"; // Valid identifier - Can start with a dollar sign and can contain numbers 
let a1_b2_c3$ = "John Doe"; // Valid identifier - Can contain letters, numbers, underscores and dollar signs  
let Function = "John Doe"; // Valid identifier - Can start with a letter and can contain letters, numbers, underscores and dollar signs 

let café = "John Doe"; // Valid identifier - Can contain Unicode characters
let café_123 = "John Doe"; // Valid identifier - Can contain Unicode characters and numbers
let 张伟 = "张伟"; // Valid identifier - Can contain Unicode characters
let 张伟_123 = "张伟"; // Valid identifier - Can contain Unicode characters and numbers
let 𝓤𝓷𝓲𝓬𝓸𝓭𝓮 = "John Doe"; // Valid identifier - Can contain Unicode characters
let \u0041 = "John Doe"; // Valid identifier - Can contain Unicode characters
let \u{1F600} = "John Doe"; // Valid identifier - Can contain Unicode characters
let \u005f = "John Doe"; // Valid identifier - Can contain Unicode characters


// Invalid
let 1invalidName = "John Doe"; // Invalid identifier - Cannot start with a number
let @invalidName = "John Doe"; // Invalid identifier - Cannot start with a special character except $ and _
let class = "John Doe"; // Invalid identifier - Cannot use reserved keywords as identifiers 
let function = "John Doe"; // Invalid identifier - Cannot use reserved keywords as identifiers  
let const = "John Doe"; // Invalid identifier - Cannot use reserved keywords as identifiers 

let my-name = "John Doe"; // Invalid identifier - Cannot contain hyphens
let my name = "John Doe"; // Invalid identifier - Cannot contain spaces
let my.name = "John Doe"; // Invalid identifier - Cannot contain dots
let my,name = "John Doe"; // Invalid identifier - Cannot contain commas
let my;name = "John Doe"; // Invalid identifier - Cannot contain semicolons
let my:name = "John Doe"; // Invalid identifier - Cannot contain colons
let my/name = "John Doe"; // Invalid identifier - Cannot contain slashes
let my\name = "John Doe"; // Invalid identifier - Cannot contain backslashes
let my?name = "John Doe"; // Invalid identifier - Cannot contain question marks
let my!name = "John Doe"; // Invalid identifier - Cannot contain exclamation marks
let my@name = "John Doe"; // Invalid identifier - Cannot contain at symbols
let my#name = "John Doe"; // Invalid identifier - Cannot contain hash symbols
let my$name = "John Doe"; // Invalid identifier - Cannot contain dollar signs in the middle of the identifier
let my%name = "John Doe"; // Invalid identifier - Cannot contain percent symbols
let my^name = "John Doe"; // Invalid identifier - Cannot contain caret symbols
let my&name = "John Doe"; // Invalid identifier - Cannot contain ampersand symbols
let my*name = "John Doe"; // Invalid identifier - Cannot contain asterisks
