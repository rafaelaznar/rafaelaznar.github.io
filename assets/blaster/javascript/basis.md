# Javascript basis

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
