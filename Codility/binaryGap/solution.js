function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let binaryValue = (N >>> 0).toString(2);

  let lengthArr = [];
  let length = 1;

  for (let i = 0; i < binaryValue.length; i++) {
    if (binaryValue[i] == 0) {
      // Check if 1 is ending then push the lenght to array and reset the length
      if (binaryValue[i + 1] == 1) {
        lengthArr.push(length);
        length = 0;
      }

      length++;
    }
  }

  return lengthArr.length ? Math.max(...lengthArr) : 0;
}
