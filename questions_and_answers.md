<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (A)

<i>The first line of code declares a variable called greeting but does not assign it any value. This means that the variable greeting is initially undefined.
The second line of code assigns an empty object ({}) to the variable greetign. This means that the variable greetign now points to an empty object.
The third line of code logs the variable greetign to the console. Since the variable greetign points to an empty object, the console will print {}./i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (D)

<i>This is because JavaScript will automatically convert the string "2" to a number before performing the addition operation. This is a process called type coercion.

Type coercion is a mechanism in JavaScript that automatically converts one type of value to another type, if necessary. In this case, the JavaScript engine knows that we are trying to add a number and a string, so it will automatically convert the string to a number before performing the addition.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (A)

<i>
The correct answer is: (A) ['🍕', '🍫', '🥑', '🍔']

The const keyword in JavaScript creates a constant variable, which means that the value of the variable cannot be changed. In the given code snippet, the food variable is declared as a constant and assigned an array of four food items.

The info variable is also declared as a constant and assigned an object with a single property, favoriteFood. The initial value of the favoriteFood property is the first element of the food array, which is "🍕".

Next, the info.favoriteFood property is assigned the string "🍝". This is allowed because const variables can be used to store objects, and the value of an object's properties can be changed.

Finally, the food variable is logged to the console. Since the food variable is a constant, its value cannot have been changed by the assignment to info.favoriteFood. Therefore, the output of the code snippet is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i>When we call the sayHi() function without any arguments, the name parameter will be undefined. This is because JavaScript will automatically assign the undefined value to function parameters that are not passed any arguments.

The sayHi() function uses the return statement to return a string that contains the greeting "Hi there" and the value of the name parameter. Since the name parameter is undefined, the returned string will be "Hi there, undefined".

Therefore, the output of the code snippet is Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B)

<i>The nums.forEach() method iterates over the nums array and calls the callback function for each element in the array. The callback function in this case is a simple arrow function that checks if the element is greater than 0. If it is, then the count variable is incremented by 1.

After the forEach() method has finished iterating over the array, the count variable will contain the number of elements in the array that are greater than 0. Since the nums array contains two elements that are greater than 0 (1 and 2), the count variable will contain the value 2.

Therefore, the output of the code snippet is 2.</i>

</p>
</details>
