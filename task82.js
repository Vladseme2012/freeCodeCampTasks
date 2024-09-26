// 1.Step 87
// Right now, if you change continueLoop to true, your while loop will run forever. This is called an infinite loop, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.

// To avoid this, start by using the increment operator to increase the value of the done variable inside your loop.

// The solution:
while (continueLoop) {
    done++;
    if (done == count) {
    }
}
// running tests
// tests completed
// console output

// 74% complete
