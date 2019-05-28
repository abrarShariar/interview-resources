// SOLVED
function solution (X, A) {
  let leavesMap = {};
  for (let i = 1;i <= X;i++) {
    leavesMap[i] = -1;
  }

  let earliestTime = 0;
  for (let j = 0;j < A.length; j++) {
    if (leavesMap[A[j]] === -1) {
      leavesMap[A[j]] = j;
    } else {
      leavesMap[A[j]] = Math.min(leavesMap[A[j]], j);
    }
    earliestTime = Math.max(earliestTime, leavesMap[A[j]]);
  }

  for (let k = 1; k <= X; k++) {
    if (leavesMap[k] === -1) {
      return -1;
    }
  }
  return earliestTime;
}

console.log(solution(5, [3,4,2,3,5,4,4,3,2,5]));
