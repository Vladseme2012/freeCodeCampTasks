// 1.Step 114
// Now move your .unshift() call into your if block.

// The solution:
for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
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
// 97% complete
