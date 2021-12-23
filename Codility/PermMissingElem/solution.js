function solution(A) {
  // get the length of the array

  // safe check to pass the loops if only one element is entered in the array
  const lengthofArr = A.length + 1;

  let finalResult = A.reduce((arrResult, value) => {
    arrResult[value] = true;

    return arrResult;
  }, []);

  // console.log(finalResult)

  for (var i = 1; i <= lengthofArr; i++) {
    //   the + 1 is added so the loop doesn't stop if the array has only one value.
    if (!finalResult[i]) {
      return i;
    }
  }
  return 1;
}
