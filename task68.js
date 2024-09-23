// 1.Step 73
// Rather than having to pass i + 1 to your padRow call, you could instead start your loop at 1. This would allow you to create a one-indexed loop.

// Update your iterator to start at 1 instead of 0.

// The solution:
for (let i = 1; i < count; i++) {
  rows.push(padRow(i + 1, count));
}
// running tests
// tests completed
// console output
// 62% complete
