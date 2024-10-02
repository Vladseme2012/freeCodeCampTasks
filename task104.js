// 1.Step 109
// Sometimes you may wish to bring back previous code that you commented out. You can do so by removing the /* and */ around that code. This is called uncommenting.

// Uncomment only your first for loop. Leave the single line comment and the other two multi line comments in place.

// The solution:
// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

// running tests
// tests completed
// console output

// #
// ###
// #####
// #######
// #########
// ###########
// #############
// ###############
// 93% complete
