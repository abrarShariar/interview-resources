function solution (U, L, C) {
  // U = sum of row [0]
  // L = sum of row [1]
  var sumU = 0;
  var sumL = 0;
  let resultStr = "";
  let resultMatrix = [];
  for (let i = 0;i<C.length;i++) {
    resultMatrix.push([0, 0]);
  }

  for (let i=0;i<C.length;i++) {
    // console.log(sumU);
    // console.log(sumL);
    if (C[i] === 2) {
      resultMatrix[i][0] = 1;
      resultMatrix[i][1] = 1;
    } else if (C[i] === 0) {
      resultMatrix[i][0] = 0;
      resultMatrix[i][1] = 0;
    }
    else {
      // check combination here
      let tempX = 1;
      let tempY = 0;
      if ((sumU + tempX) <= U && (sumL + tempY) <= L) {
        resultMatrix[i][0] = tempX;
        resultMatrix[i][1] = tempY;
        continue;
      } else {
        resultMatrix[i][0] = tempY;
        resultMatrix[i][1] = tempX;
        continue;
      }

      resultStr = "IMPOSSIBLE";
      return resultStr;
    }

    sumU = parseInt(sumU) + parseInt(resultMatrix[0][i]);
    sumL = parseInt(sumL) + parseInt(resultMatrix[1][i]);
  }

  for (let i=0;i<C.length;i++) {
    console.log(resultMatrix[i][0]);
     resultStr = resultStr + resultMatrix[i][0];
  }

  resultStr += ",";
  for (let i=0;i<C.length;i++) {
     resultStr = resultStr +  resultMatrix[i][1];
  }

  return resultStr;
}


console.log(solution(3,2, [2, 1, 1, 0, 1]));




























// function solution (A) {
//   let inLine = {};
//   const originX = 0;
//   const originY = 0;
//   let laserCount = 0;
//
//   for (let i = 0;i< A.length;i++) {
//     inLine[i] = 0;
//   }
//
//   for (let i = 0;i < A.length;i++) {
//     if (inLine[i] !== 1) {
//       laserCount++;
//       let slopeOrigin = (A[i].x - originX) / (A[i].y - originY);
//       for (let j = i+1;j < A.length; j++) {
//         if (Math.sign(A[i].x) === Math.sign(A[j].x) && Math.sign(A[j].x) === Math.sign(A[j].y)) {
//           let slopeTest = (A[j].x - originX) / (A[j].y - originY);
//           if (slopeTest === slopeOrigin) {
//             inLine[j] = 1;
//           } else {
//             laserCount++;
//           }
//         }
//       }
//     }
//   }
//   return laserCount;
// }
//
//
// const testData = {
//   { }
// }
