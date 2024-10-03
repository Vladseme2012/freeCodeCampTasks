// 1.Step 113
// Now move your .unshift() call into your if block.

// The solution:
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    }
}

// running tests
// tests completed
// 97% complete
