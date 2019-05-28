// SOLVED
function (A) {
  let sumArr = 0
  for (let i = 0; i < A.length;i++) {
    sumArr += A[i];
  }
  const N = A.length + 1;
  return ((N * (N + 1))/2) - sumArr;
}
