// 1.Step 95
// Using done to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.

// Arrays have a special length property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like myArray.length.

// Note that rows.length in the padRow call would give you an off-by-one error, because done is incremented before the call.

// Update your condition to check if rows.length is less than count.

// The solution:
let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(done, count));
}
// running tests
// tests completed

// 81% complete
