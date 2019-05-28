// SOLVED
function solution (A) {
  const maxNum = Math.max(...A);
  let map = {};
  // initialize hash map
  for (let i = 1;i <= maxNum;i++) {
    map[i] = 0;
  }
  A.forEach((el) => {
    map[el] = 1;
  });

  // find the one with zero
  let isFoundZero = false;
  for (let el in map) {
    if (map[el] === 0) {
      isFoundZero = true;
      return el;
    }
  }

  if (!isFoundZero && (maxNum + 1) !== 0) {
    return maxNum + 1;
  }

  if (maxNum + 1 === 0) {
    return 1;
  }
}


const result = parseInt(solution([-1, -3, 1]));
console.log(result);
