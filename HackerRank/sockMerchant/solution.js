function sockMerchant(n, ar) {
  // Write your code here
  let pairs = 0;
  const temp = {};

  // loop through the provided array
  for (let n of ar) {
    // check if current value already exist in your temp object
    if (temp[n] in temp) {
      // if current value already exist in temp
      // delete the value and increase pairs
      delete temp[n];
      pairs += 1;
    } else {
      // else add current value to the object
      temp[n] = n;
    }
  }

  // return pairs
  return pairs;
}
