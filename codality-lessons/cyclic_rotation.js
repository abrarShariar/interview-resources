// SOLVED
function solution (arr, k) {
  if (arr.length <= 0) {
    return arr;
  }
  for (let i = 0; i < k;i++) {
    let newArr = [];
    newArr.push(arr[arr.length - 1]);
    arr = newArr.concat(arr.slice(0, arr.length - 1));
  }
  return arr;
}

const A = [];
console.log(solution(A, 3));
