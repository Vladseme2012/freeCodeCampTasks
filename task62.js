// 1.Step 67
// Your padRow function has two parameters which you defined. Values are provided to those parameters when a function is called.

// The values you provide to a function call are referred to as arguments, and you pass arguments to a function call. Here's a function call with "Hello" passed as an argument:

// Example Code
// test("Hello");
// Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

// The solution:
for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}
// running tests
// tests completed
// console output
// 57% complete
