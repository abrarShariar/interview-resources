// REDO


// function solution (A) {
//   const numMax = Math.max(...A);
//   const sumArr = A.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
//   return sumArr === (numMax * (numMax + 1)) / 2 ? 1 : 0;
// }

function solution (A) {
  let sortedArr = A.sort();
  for (let i = 0;i < sortedArr.length - 1;i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      return 0;
    }
  }
  return 1;
}

console.log(solution([2,3,4,5,6,7]));
