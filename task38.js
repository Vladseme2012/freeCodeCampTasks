// 1.Step 43
// Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

// You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

// Example Code
// lineOne = lineOne + "\n" + lineTwo;
// Use a second addition operator to concatenate a new line between the existing result value and the added row value.

// The solution:
for (const row of rows) {
    result = result + '\n' + row;
}
// running tests
// tests completed
// console output
0;
1;
2;
3;
4;
5;
6;
7;
// 36% complete
