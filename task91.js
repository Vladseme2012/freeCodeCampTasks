// 1.Step 96
// Replace the done reference in your padRow call with rows.length + 1.

// The solution:
let done = 0;
while (rows.length < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}
// running tests
// tests completed

// 81% complete
