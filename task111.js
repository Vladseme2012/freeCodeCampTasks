// 1.Step 116
// Your pyramid generator is now in a finished state, with more functionality than you originally planned! The next step is to clean up your code.

// Remove all comments, both single- and multi-line, from your code.

// The solution:
for (let i = 1; i <= count; i++) {
  if (inverted) {
      rows.unshift(padRow(i, count));
  } else {
      rows.push(padRow(i, count));
  }
}

// running tests
// tests completed
// console output

// ###############
//  #############
//   ###########
//    #########
//     #######
//      #####
//       ###
//        #
// 99% complete
