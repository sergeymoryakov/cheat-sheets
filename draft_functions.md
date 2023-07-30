In JavaScript, functions are blocks of code that can be defined and executed when called upon. They are used to perform specific tasks or calculations and are an essential part of the language. The syntax of JavaScript functions consists of three main parts:

Function Declaration:
The most common and traditional way to define a function is using the function declaration. It has the following syntax:

function functionName(parameters) {
// Function body (code block)
// This is where the function's logic resides
// It performs the desired operations when the function is called
return someValue; // Optional, used to return a result
}

Example:

function add(a, b) {
return a + b;
}

Function Expression:
In JavaScript, functions are also treated as first-class objects, which means they can be assigned to variables. This is known as a function expression. It has the following syntax:

const functionName = function(parameters) {
// Function body (code block)
return someValue; // Optional, used to return a result
};

Example:

const subtract = function(a, b) {
return a - b;
};

Arrow Function Expression:
Introduced in ECMAScript 6 (ES6), arrow functions provide a more concise syntax for defining functions, especially when the function is short. They also have some differences in how they handle the 'this' keyword compared to regular functions. The syntax for an arrow function is as follows:

const functionName = (parameters) => {
// Function body (code block)
return someValue; // Optional, used to return a result
};

Example:

const multiply = (a, b) => {
return a \* b;
};

Differences between these three methods:

Hoisting:

Function declarations are hoisted, meaning you can call them before their actual definition in the code.
Function expressions and arrow functions are not hoisted, so you must define them before calling.
'this' context:

In regular function declarations and expressions, the value of 'this' is dynamically determined based on how the function is called. It can vary depending on the context.
In arrow functions, 'this' is lexically scoped, which means it takes the value of 'this' from its enclosing function or scope.
Syntax length:

Arrow functions provide a more concise syntax, especially for one-liner functions.
Which method to use depends on the situation. Function declarations are generally used for named functions, whereas function expressions and arrow functions are often used for anonymous functions or when you need to pass functions as arguments to other functions (e.g., in higher-order functions).

## Differences:

The main difference lies in when you define the function in your code:

Function Declaration:
Function declarations are hoisted, which means they are available throughout the scope they are defined in, even before the actual declaration in the code.
You can call a function declared using the function keyword at any point in your code, even before the line where the function is declared.

Example:

// Calling the 'add' function before its declaration
const result = add(5, 10);
console.log(result); // Output: 15

// Function declaration
function add(a, b) {
return a + b;
}

Function Expression:
Function expressions are not hoisted, so you need to define them before calling them.
If you try to call an expressed function before its definition, you'll get an error.

Example:

// This will cause an error: "TypeError: subtract is not a function"
const result = subtract(10, 5);

// Function expression
const subtract = function(a, b) {
return a - b;
};

To avoid errors with function expressions, make sure you define the function before you attempt to call it.

Arrow Function Expression:
Like function expressions, arrow functions are also not hoisted, so they should be defined before calling.
The same rule applies here: define the arrow function before calling it.

Example:

// This will cause an error: "TypeError: multiply is not a function"
const result = multiply(2, 3);

// Arrow function expression
const multiply = (a, b) => {
return a \* b;
};

So, the importance of expressing a function before calling it applies to both function expressions and arrow functions, as you need to ensure the function is defined and available in memory at the time of the call.
