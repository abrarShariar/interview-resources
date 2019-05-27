// let n = 4;
// for (let i = n;i > 0;i--) {
//   let result = "";
//   //print spaces
//   for (let j = 0; j < n - i; j++) {
//     result += " "
//   }
//   //print stars
//   for (let k = 0;k < 2*i -1;k++) {
//     result += "*"
//   }
//   console.log(result);
//   // if (i > 1) {
//   //   result += "\n"
//   // }
// }

// Iterations
function findBinGap (num) {
  // convert to bin
  const binNum = parseInt(num, 10).toString(2);
  let maxGap = 0;
  let currentGap = 0;
  for (let i = 1;i < binNum.length;i++) {
    if (binNum[i] === '0') {
      currentGap++;
    } else {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    }
  }
  return maxGap;
}

const testValues = [
  32, 529, 15, 32, 20, 1041
];

testValues.forEach((val) => {
  console.log(val, findBinGap(val));
});
