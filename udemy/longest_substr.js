function solution (str) {
    if (str.length === 0) {
  	return 0;
  }
  else if (str === " ") {
           return 1;
           }

 	else if (str.length === 1) {
           return 1;
           }
  let hashMap = {};
  let maxCount = 0;

  for (let i=0;i<str.length;i++) {
    if (!hashMap[str[i]]) {
        hashMap[str[i]] = 1;
    } else {
      maxCount = Math.max(maxCount, Object.keys(hashMap).length);
      hashMap = {};
      hashMap[str[i]] = 1;
    }
  }

  return Math.max(maxCount, Object.keys(hashMap).length);
}

console.log(solution("abcabcbbxyz"));
console.log(solution("bbbbbb"));
console.log(solution(""));
console.log(solution("dvdf"));
