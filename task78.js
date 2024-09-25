// 1.Step 83
// Sometimes you will want to run different code when all of the if...else if conditions are false. You can do this by adding an else block.

// An else block will only evaluate if the conditions in the if and else if blocks are not met.

// Here the else block is added to the else if block.

// Example Code

// if (condition) {
//   // this code will run if condition is true
// } else if (condition2) {
//   // this code will run if the first condition is false
// } else {
//   // this code will run
//   // if the first and second conditions are false
// }
// Add an else block to the else if block. Inside the else block, log the string "This is the else block" to the console.

// To see the results in the console, you can manually change the < in the else if statement to >. That will make the condition false and the else block will run.

// The solution:
if ('') {
    console.log('Condition is true');
} else if (5 > 10) {
    console.log('5 is less than 10');
} else {
    console.log('This is the else block');
}
// running tests
// tests completed
// console output
'This is the else block'
// 70% complete
