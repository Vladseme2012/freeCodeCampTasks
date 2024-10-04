// 1.Step 115
// When inverted is false, you want to build a standard pyramid. Use .push() like you have in previous steps to achieve this.

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
// 98% complete
