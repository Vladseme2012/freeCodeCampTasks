// 1.Step 42
// Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

// You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

// In your for...of loop, use the addition operator to concatenate the row value to the result value.

// The solution:
for (const row of rows) {
    result = result + row;
}
// running tests
// tests completed
// console output
('01234567');
// 36% complete
