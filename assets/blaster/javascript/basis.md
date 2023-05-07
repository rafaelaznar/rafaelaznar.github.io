# Javascript basis
## Syntax
JavaScript uses a similar syntax to other programming languages, with statements and expressions used to define actions or values. Here's an example of a basic JavaScript statement:

```javascript
console.log("Hello, world!");
```

This statement prints the message "Hello, world!" to the console, which is a tool available in most web browsers for debugging and testing.

## Data types

3. Data types:
JavaScript has several built-in data types, including strings, numbers, booleans, arrays, objects, and more. Here are a few examples:

```javascript
// String data type
let myString = "Hello, world!";

// Number data type
let myNumber = 42;

// Boolean data type
let myBoolean = true;

// Array data type
let myArray = ["apple", "banana", "orange"];

// Object data type
let myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com"
};
```




## Literals

In JavaScript, a "literal" is a value that is directly specified in the source code, without the need for any additional computation or evaluation. For example, the following are all examples of literals in JavaScript:

- 42
- "hello world"
- true
- null

## Variables

In contrast, a "variable" is a named storage location in memory that can hold a value. Variables are used to store data that may change over time, or that is computed as part of a program's execution. In JavaScript, variables can be declared using the `var`, `let`, or `const` keywords.

The `var` keyword was the original way to declare variables in JavaScript, but it has since been largely replaced by `let` and `const`. Variables declared with `var` are function-scoped, which means that they are accessible within the function in which they are defined, as well as any nested functions. For example:

```javascript
function example() {
  var x = 42;
  console.log(x); // prints 42
}
```

In contrast, variables declared with `let` and `const` are block-scoped, which means that they are accessible only within the block in which they are defined. For example:

```javascript
function example() {
  let x = 42;
  if (true) {
    let x = 99;
    console.log(x); // prints 99
  }
  console.log(x); // prints 42
}
```

In addition to literals and variables, JavaScript also provides a range of operators and expressions that can be used to manipulate and combine values. These include arithmetic operators (such as `+`, `-`, `*`, and `/`), comparison operators (such as `==`, `!=`, `<`, and `>`), and logical operators (such as `&&`, `||`, and `!`).


## Operators

In JavaScript, operators are special symbols or keywords that are used to perform operations on values. They can be used to perform arithmetic, comparison, assignment, logical, and other types of operations.

Here are some of the most common types of operators in JavaScript:

1. Arithmetic Operators: These operators are used to perform mathematical calculations on values, such as addition, subtraction, multiplication, and division. For example, `+` is the addition operator, `-` is the subtraction operator, `*` is the multiplication operator, and `/` is the division operator.

2. Comparison Operators: These operators are used to compare two values and return a Boolean value (`true` or `false`) indicating whether the comparison is true or false. For example, `==` is the equality operator, `!=` is the inequality operator, `<` is the less-than operator, and `>` is the greater-than operator.

3. Assignment Operators: These operators are used to assign values to variables. For example, `=` is the assignment operator, which assigns the value on the right-hand side of the operator to the variable on the left-hand side.

4. Logical Operators: These operators are used to perform logical operations on Boolean values. For example, `&&` is the logical AND operator, which returns `true` if both of its operands are `true`, and `||` is the logical OR operator, which returns `true` if at least one of its operands is `true`.

5. Bitwise Operators: These operators are used to perform bitwise operations on values, which involve manipulating the individual bits of a value. For example, `&` is the bitwise AND operator, `|` is the bitwise OR operator, and `^` is the bitwise XOR operator.

6. String Operators: These operators are used to concatenate or compare strings. For example, `+` is the concatenation operator, which combines two or more strings into a single string, and `==` and `!=` are comparison operators that can be used to compare strings.


Here are a few examples:

```javascript
// Arithmetic operators
let x = 10;
let y = 5;
console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2

// Comparison operators
let a = 10;
let b = 5;
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a == b); // Output: false
console.log(a != b); // Output: true

// Logical operators
let p = true;
let q = false;
console.log(p && q); // Output: false
console.log(p || q); // Output: true
console.log(!p); // Output: false

// Assignment operators
let c = 10;
c += 5; // Equivalent to c = c + 5
console.log(c); // Output: 15
``` 

## Control flow

Control flow in JavaScript refers to the way that a program executes different statements or blocks of code depending on certain conditions. JavaScript provides several control flow statements, including conditionals and loops, which can be used to create more complex programs.

Control flow statements are essential for creating more complex programs in JavaScript. By combining conditionals and loops, you can create programs that can respond to user input, manipulate data, and interact with other web technologies.

### Conditionals:
In JavaScript, conditional statements are used to execute different pieces of code based on a particular condition. There are several types of conditional statements in JavaScript, including the `if` statement, the `if...else` statement, the `switch` statement, and the ternary operator.

1. The `if` statement:
The `if` statement is used to execute a block of code if a particular condition is true. Here's the basic syntax:

```javascript
if (condition) {
  // Code to execute if the condition is true
}
```

Here's an example:

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are old enough to vote!");
}
```

In this example, the code inside the `if` block will be executed because the condition (`age >= 18`) is true.

2. The `if...else` statement:
The `if...else` statement is used to execute one block of code if a condition is true, and another block of code if the condition is false. Here's the basic syntax:

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

Here's an example:

```javascript
let age = 16;
if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("You are not old enough to vote yet.");
}
```

In this example, the code inside the `else` block will be executed because the condition (`age >= 18`) is false.

3. The `switch` statement:
The `switch` statement is used to execute different blocks of code based on different possible values of a variable. Here's the basic syntax:

```javascript
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if none of the cases match
    break;
}
```

Here's an example:

```javascript
let dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Not a valid day of the week.");
    break;
}
```

In this example, the code inside the first `case` block will be executed because `dayOfWeek` is equal to `"Monday"`.

4. The ternary operator:
The ternary operator is a shorthand way to write an `if...else` statement in a single line of code. Here's the basic syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Here's an example:

```javascript
let age = 16;
let message = age >= 18 ? "You are old enough to vote!" : "You are not old enough to vote yet.";
console.log(message);
```

In this example, the value of the `message` variable will be `"You are not old enough to vote yet."` because the condition (`age >= 18`) is false.

Conditional statements are an essential part of any programming language, and understanding them is crucial for creating complex programs in JavaScript.

## Loops:
In JavaScript, loops are used to repeat a block of code multiple times. There are several types of loops in JavaScript, including the `for` loop, the `while` loop, and the `do...while` loop.

1. The `for` loop:
The `for` loop is used to repeat a block of code a specific number of times. Here's the basic syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // Code to repeat
}
```

Here's an example:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

In this example, the loop will repeat 10 times, and the value of `i` will be printed to the console on each iteration.

2. The `while` loop:
The `while` loop is used to repeat a block of code while a particular condition is true. Here's the basic syntax:

```javascript
while (condition) {
  // Code to repeat
}
```

Here's an example:

```javascript
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

In this example, the loop will repeat 10 times, and the value of `i` will be printed to the console on each iteration.

3. The `do...while` loop:
The `do...while` loop is similar to the `while` loop, except that the code inside the loop will always execute at least once, even if the condition is initially false. Here's the basic syntax:

```javascript
do {
  // Code to repeat
} while (condition);
```

Here's an example:

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
```

In this example, the loop will repeat 10 times, and the value of `i` will be printed to the console on each iteration.

Loops are an essential part of any programming language, and understanding how they work is crucial for creating complex programs in JavaScript. It's also important to be aware of the potential pitfalls of loops, such as infinite loops, which can cause a program to crash or become unresponsive.

