// 1.Step 112
// Use an if statement to check if inverted is true. Remember that you do not need to use an equality operator here.

// The solution:
for (let i = 1; i <= count; i++) {
    if (inverted) rows.unshift(padRow(i, count));
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
// 96% complete
