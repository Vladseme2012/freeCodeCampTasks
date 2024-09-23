// 1.Step 75
// Unfortunately, now the bottom of the pyramid has disappeared. This is because you have created another off-by-one error.

// Your original loop went for i values from 0 to 7, because count is 8 and your condition requires i to be less than count. Your loop is now running for i values from 1 to 7.

// Your loop needs to be updated to run when i is 8, too. Looking at your logic, this means your loop should run when i is less than or equal to count. You can use the less than or equal to operator <= for this.

// Update your loop condition to run while i is less than or equal to count.

// The solution:
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
// running tests
// tests completed
// console output
// 64% complete
