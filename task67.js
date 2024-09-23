// 1.Step 72
// Because you are only increasing i by 1, you can use the increment operator ++. This operator increases the value of a variable by 1, updating the assignment for that variable. For example, test would become 8 here:

// Example Code
// let test = 7;
// test++;
// Replace your addition assignment with the increment operator for your loop iteration.

// The solution:
for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}
// running tests
// tests completed
// console output
// 61% complete
