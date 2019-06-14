function solution (A) {
  let hashMap = {};
  A.sort();
  for (let i=0;i<A.length;i++) {
    if (A[i] > 0) {
    	    hashMap[A[i]] = 1;
    }
  }
  
  if (Object.keys(hashMap).length === 0) {
      return 1;
  }
  
  let maxEl = Math.max(...A)
  for (let i=1;i <= maxEl;i++) {
    if (hashMap[i] !== 1) {
        return i;
     }
  }
  
  return maxEl + 1;
}

