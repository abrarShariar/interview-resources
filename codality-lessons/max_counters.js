// RUNTIME
function solution (N, A) {
  let counterArr = [];
  for (let i=0;i<N;i++) {
    counterArr.push(0);
  }

  for (let k=0;k<A.length;k++) {
    if (A[k] <= N) {
      //increase
      counterArr[A[k] - 1] += 1;
    } else if (A[k] === N + 1) {
      // max counter
      const maxNum = Math.max(...counterArr);
      for (let j=0;j<counterArr.length;j++) {
        counterArr[j] = maxNum;
      }
    }
  }

  return counterArr;
}

console.log(solution());
