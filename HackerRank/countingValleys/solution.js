function countingValleys(steps, path) {
  // Write your code here
  let a = Array.from(path);
  let valleys = 0;
  let pos = 0;
  let prevpos = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'U') {
      prevpos = pos++;
      if (pos === 0) {
        valleys++;
      }
    } else {
      prevpos = pos--;
    }
  }

  return valleys;
}
