
n solution (arr) {
  let hashMap = {};
  for (let i=0;i<arr.length;i++) {
    if (hashMap[arr[i]]) {
        return arr[i];
    }
    hashMap[arr[i]] = 1;
  }
  return undefined;
}

