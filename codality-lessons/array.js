// NOT SOLVED - work on it
function solution (arr) {
  arr.sort();
  if (arr.length === 1) {
    return arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1 && i > 0) {
      if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
        return arr[i];
      }
    } else if (i === 0 && arr[i] !== arr[i+1]) {
      return arr[i];
    }
     else if (i === arr.length - 1 && arr[i] !== arr[i-1]) {
      return arr[i];
    }
  }
}

const testValues = [
  [1,2,3,3,2], [9], [0,1,9,9,1], [9,1,1,2,2], [0,1,1,1,1], [1,1,1,1,5]
];

testValues.forEach((val) => {
  console.log(solution(val));
})
