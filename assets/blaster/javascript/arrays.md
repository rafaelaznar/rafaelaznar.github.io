# Javascript arrays

In JavaScript, an array is an ordered collection of values, which can be of any data type, such as numbers, strings, objects, or even other arrays. Arrays are a fundamental data structure in JavaScript and are used to store and manipulate sets of data.

In JavaScript, arrays can dynamically grow or shrink in size, which means you can add or remove elements from an array at any time. The length of an array is not fixed and can be changed during runtime.

Arrays in JavaScript are zero-indexed, which means that the first element is at index 0, the second element is at index 1, and so on. You can access an element in an array by using its index.

## Declaration & initialization

In JavaScript, you can declare and initialize an array using the following syntax:

```javascript
// Declare an empty array
let myArray = [];

// Declare an array with elements
let myOtherArray = [1, 2, 3, 4];
```

Here's an example of how to declare and initialize an array in JavaScript:

```
// declaring an empty array
let myArray = [];

// declaring an array with some elements
let myArray2 = [1, 2, 3, "hello", { name: "John" }];
```

In this example, `myArray` is an empty array, and `myArray2` is an array that contains five elements of different data types.

You can also use the `Array()` constructor to create an array:

```javascript
let myArray = new Array();  // creates an empty array
let myOtherArray = new Array(1, 2, 3, 4);  // creates an array with elements
```

However, it is more common to use the square bracket notation for creating arrays.

```javascript
let myArray = [];  // creates an empty array
let myOtherArray = [1, 2, 3, 4];  // creates an array with elements
```

In JavaScript, arrays can hold values of different types. For example, an array can have a string as its first element and a number as its second element. Also, arrays in JavaScript are dynamic, meaning you can add or remove elements from the array as needed.

## Accessing array elements

In JavaScript, array elements can be accessed using their index number. The index starts at 0 for the first element in the array and increments by 1 for each subsequent element.

There are two ways to access the array elements in JavaScript:

1. Bracket notation: We use square brackets `[ ]` with the index number of the element inside it to access the element. For example:

```javascript
let fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange
```

2. Dot notation: We can also use the dot notation to access the array elements if we declare the array as an object. For example:

```javascript
let fruits = {
  0: "apple",
  1: "banana",
  2: "orange",
  3: "mango"
};

console.log(fruits.0); // Syntax Error: Unexpected number
console.log(fruits.2); // Syntax Error: Unexpected number
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange
```

Note that we cannot use dot notation to access elements if the array is declared with the square brackets.

## Array length property

In JavaScript, the `length` property of an array returns the number of elements in the array. It is a read-only property, which means that you can't set the length of an array explicitly.

Here's an example:

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // Output: 3
```

In the example above, `fruits` is an array with three elements. The `length` property of the array is `3`, which is the number of elements in the array.

You can also use the `length` property to add or remove elements from an array. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.length = 3; // Removes the last two elements from the array
console.log(numbers); // Output: [1, 2, 3]

numbers.length = 5; // Adds two empty elements to the array
console.log(numbers); // Output: [1, 2, 3, undefined, undefined]

numbers.length = 2; // Removes the last three elements from the array
console.log(numbers); // Output: [1, 2]
```

In the example above, setting the `length` property to a smaller value removes elements from the end of the array, while setting it to a larger value adds empty elements to the end of the array. When you set the `length` property to a value that is between the current length and the maximum length of the array, the elements beyond the new length are removed from the array.

## Array methods

### Push and pop methods

In JavaScript, arrays come with built-in methods that allow us to modify their contents. Two such methods are `push` and `pop`, which are used to add or remove elements from the end of an array.

The `push` method adds one or more elements to the end of an array, and returns the new length of the array. Here's an example:

```
let myArray = [1, 2, 3];
let newLength = myArray.push(4, 5);
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

In this example, we define an array called `myArray` with three elements. We then use the `push` method to add two more elements (`4` and `5`) to the end of the array. The `push` method returns the new length of the array, which is `5`.

The `pop` method removes the last element from an array, and returns that element. Here's an example:

```
let myArray = [1, 2, 3];
let lastElement = myArray.pop();
console.log(myArray); // Output: [1, 2]
console.log(lastElement); // Output: 3
```

In this example, we define an array called `myArray` with three elements. We then use the `pop` method to remove the last element (`3`) from the array and assign it to a variable called `lastElement`. The `pop` method returns the value of the element that was removed, which is `3`. We then log the modified array and the removed element to the console.

Both `push` and `pop` modify the original array, so use them with caution.

### Shift and unshift methods

In JavaScript, the `shift()` and `unshift()` methods are used to add or remove elements at the beginning of an array. 

The `shift()` method removes the first element from an array and returns it. It also updates the array by shifting all remaining elements one index to the left. Here is an example:

```javascript
let arr = [1, 2, 3, 4, 5];
let firstElement = arr.shift(); // removes the first element (1)
console.log(firstElement); // output: 1
console.log(arr); // output: [2, 3, 4, 5]
```

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. Here is an example:

```javascript
let arr = [2, 3, 4, 5];
let newLength = arr.unshift(1); // adds the element 1 to the beginning of the array
console.log(newLength); // output: 5 (the new length of the array)
console.log(arr); // output: [1, 2, 3, 4, 5]
```

You can also add multiple elements to the beginning of an array using the `unshift()` method, like this:

```javascript
let arr = [3, 4, 5];
let newLength = arr.unshift(1, 2); // adds the elements 1 and 2 to the beginning of the array
console.log(newLength); // output: 5 (the new length of the array)
console.log(arr); // output: [1, 2, 3, 4, 5]
```

### Splice method

The `splice()` method is a powerful built-in method in JavaScript arrays that allows developers to modify an array by adding, removing, and/or replacing elements. The method takes three arguments:

1. The starting index of the modification. This is the index of the first element that will be modified.

2. The number of elements to remove from the array, starting at the starting index. If this argument is 0, no elements will be removed.

3. Optional: Any number of additional elements to add to the array, starting at the starting index.

Here are a few examples of using the `splice()` method:

1. Removing elements from an array:
```
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // remove 2 elements starting at index 2
console.log(numbers); // output: [1, 2, 5]
```

2. Replacing elements in an array:
```
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 'three'); // replace 1 element starting at index 2 with 'three'
console.log(numbers); // output: [1, 2, 'three', 4, 5]
```

3. Adding elements to an array:
```
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 'two-point-five'); // add 'two-point-five' starting at index 2
console.log(numbers); // output: [1, 2, 'two-point-five', 3, 4, 5]
```

### Concat method

The `concat()` method is a built-in function in JavaScript that is used to merge two or more arrays into a single array. The `concat()` method does not change the original arrays. Instead, it returns a new array that contains the combined elements of the original arrays. 

The syntax of the `concat()` method is as follows:

```
array.concat(arr1, arr2, ..., arrN)
```

Here, `array` is the original array that will be merged with the other arrays specified as arguments. `arr1`, `arr2`, and so on are the arrays that will be merged with the original array.

The `concat()` method can be used to merge any number of arrays, and the resulting array will be a flattened array containing all the elements of the original arrays. For example:

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const newArray = array1.concat(array2, array3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

In this example, the `concat()` method is used to merge three arrays (`array1`, `array2`, and `array3`) into a single array (`newArray`). The resulting array contains all the elements of the original arrays in the order they were specified as arguments.

### Slice method

The `slice()` method in JavaScript returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (end not included). The original array is not modified. The `slice()` method extracts the elements of an array and returns them as a new array. 

The syntax for the `slice()` method is:

```
array.slice(start, end)
```

where:
- `array` is the array that will be sliced.
- `start` is the index at which to begin extraction. If `start` is undefined, it starts from index 0.
- `end` is the index at which to end extraction. If `end` is undefined, it extracts through the end of the sequence. This argument is optional.

The `slice()` method can be used to create a copy of an entire array or to extract a portion of an array into a new array.

Here are some examples:

```
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// create a new array with a copy of the entire original array
const copy = fruits.slice();

// create a new array with the first two elements of the original array
const firstTwo = fruits.slice(0, 2);

// create a new array with the last two elements of the original array
const lastTwo = fruits.slice(-2);

// create a new array with the third and fourth elements of the original array
const middleTwo = fruits.slice(2, 4);
```

In each example, the `slice()` method is used to create a new array. The `copy` array is a copy of the entire `fruits` array. The `firstTwo` array contains the first two elements of the `fruits` array. The `lastTwo` array contains the last two elements of the `fruits` array. The `middleTwo` array contains the third and fourth elements of the `fruits` array.

### Sort method

The `sort()` method in JavaScript is used to sort an array's elements in place. By default, the `sort()` method sorts the elements alphabetically, but it can also sort numerically or by any other custom order.

The syntax for using the `sort()` method is as follows:

```javascript
array.sort(compareFunction);
```

Here, `array` is the name of the array to be sorted, and `compareFunction` is an optional parameter that specifies the function used to compare elements in the array. If this parameter is not provided, the `sort()` method will sort the elements in ascending alphabetical order.

If you want to sort an array numerically, you can use the following compare function:

```javascript
function compareNumbers(a, b) {
  return a - b;
}
```

This function subtracts `b` from `a` and returns the result, which will be negative if `a` is less than `b`, positive if `a` is greater than `b`, and zero if they are equal.

Here's an example of using the `sort()` method to sort an array of numbers:

```javascript
let numbers = [4, 2, 8, 5, 1, 7];
numbers.sort(compareNumbers);
console.log(numbers); // [1, 2, 4, 5, 7, 8]
```

You can also sort an array of strings in reverse order by using the following compare function:

```javascript
function compareReverse(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}
```

This function compares the strings using the less than (`<`) and greater than (`>`) operators, but returns the opposite values to sort the array in reverse order.

Here's an example of using the `sort()` method to sort an array of strings in reverse order:

```javascript
let fruits = ["banana", "apple", "orange", "grape"];
fruits.sort(compareReverse);
console.log(fruits); // ["orange", "grape", "banana", "apple"]
```

It's important to note that the `sort()` method modifies the original array, so you should make a copy of the array if you want to preserve the original order.

To shuffle an array in JavaScript, we can use a simple algorithm that involves iterating over the array and swapping each element with another randomly selected element in the array. Here's an example implementation:

```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const myArray = [1, 2, 3, 4, 5];
shuffleArray(myArray);
console.log(myArray); // output may vary: e.g., [5, 2, 3, 4, 1]
```

In this implementation, we start at the end of the array and iterate backwards, swapping each element with another randomly selected element from the array. The `Math.floor(Math.random() * (i + 1))` expression generates a random integer between 0 and `i` (inclusive), which is used as an index to select an element to swap with the current element.

Note that this algorithm shuffles the array in-place, meaning it modifies the original array rather than creating a new one. If you want to create a shuffled copy of an array, you can first make a copy of the original array and then shuffle the copy instead.

### Reverse method

The `reverse()` method is a built-in function in JavaScript that is used to reverse the order of the elements in an array. The method modifies the original array, and does not create a new one.

The syntax of the `reverse()` method is:

```javascript
array.reverse()
```

Here, `array` is the array on which we want to perform the operation.

Example:

```javascript
let arr = ['apple', 'banana', 'orange', 'mango'];
console.log(arr); // Output: ['apple', 'banana', 'orange', 'mango']

arr.reverse();

console.log(arr); // Output: ['mango', 'orange', 'banana', 'apple']
```

In the above example, we have an array `arr` with four elements. We apply the `reverse()` method on the `arr` array, which reverses the order of the elements in the array. After applying the method, we log the contents of the array to the console, which shows that the array elements have been reversed.

Note that the `reverse()` method does not create a new array. It modifies the original array in place.

## Iterating over arrays

### For loop

A for loop is a control flow statement that is commonly used to iterate through arrays in JavaScript. Here's the basic syntax for a for loop:

```
for (let i = 0; i < array.length; i++) {
  // code block to be executed
}
```

This loop will iterate through each element in the array, starting from the first element (index 0) and ending at the last element (index `array.length - 1`). The loop uses a variable `i` to keep track of the current index being iterated, and it increments `i` by 1 after each iteration using the `i++` expression. 

Within the loop block, you can access the current array element using the `array[i]` syntax. Here's an example that logs each element of an array to the console:

```
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

This will output:

```
1
2
3
4
5
```

### For...of loop

You can also use the `for...of` loop to iterate over an array in a simpler way, as follows:

```
const array = [1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}
```

This will also output:

```
1
2
3
4
5
```

### For...in loop

The `for...in` loop in JavaScript is used to iterate over the enumerable properties of an object. It can also be used to iterate over the indices of an array. However, it is not recommended to use `for...in` to loop through arrays because it can also iterate over non-index properties and can result in unexpected behavior.

The syntax for the `for...in` loop is as follows:

```
for (variable in object) {
  // code to be executed
}
```

Here, `variable` is a variable that will be assigned to each property of the object or index of the array in each iteration. `object` is the object or array to be iterated over.

For example, let's say we have an array of fruits:

```
var fruits = ["apple", "banana", "orange"];
```

We can use a `for...in` loop to loop through the indices of the array as follows:

```
for (var index in fruits) {
  console.log(fruits[index]);
}
```

This will output:

```
apple
banana
orange
```

However, as mentioned earlier, it is not recommended to use `for...in` to loop through arrays because it can also iterate over non-index properties. For example, if we add a new property to the array:

```
fruits.color = "red";
```

And then use a `for...in` loop to loop through the array:

```
for (var index in fruits) {
  console.log(fruits[index]);
}
```

This will output:

```
apple
banana
orange
red
```

As we can see, the loop also iterated over the `color` property, which is not an index of the array.

Therefore, it is recommended to use a `for` loop or a `forEach` method to loop through arrays in JavaScript.

### forEach method

The `forEach()` method is used to iterate over an array in JavaScript. It is a higher-order function that accepts a callback function as its argument. This callback function is executed once for each element in the array.

The syntax for using the `forEach()` method is as follows:

```
array.forEach(callbackFunction);
```

The `callbackFunction` parameter is a function that is executed once for each element in the array. This function takes up to three arguments:

1. The current element being processed.
2. The index of the current element.
3. The array being processed.

Here is an example of using the `forEach()` method to iterate over an array:

```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`The number at index ${index} is ${number}`);
});
```

In this example, the `forEach()` method is used to iterate over the `numbers` array. For each element in the array, the callback function is executed. The `number` parameter represents the current element being processed, and the `index` parameter represents the index of the current element. The `console.log()` statement in the callback function prints the current element and its index to the console. The output of this code would be:

```
The number at index 0 is 1
The number at index 1 is 2
The number at index 2 is 3
The number at index 3 is 4
The number at index 4 is 5
```

The `forEach()` method is a convenient way to iterate over an array in JavaScript, and it can often make code easier to read and understand.
