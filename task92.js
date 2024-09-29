// 1.Step 97
// Now you no longer need your done variable. Remove the increment operation from your loop, and the variable declaration for done.

// The solution:
while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

// running tests
// tests completed
// console output

// 82% complete
