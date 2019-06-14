/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let j = 0;
  let zCount = 0;
  
  for (let i=0;i<nums.length;i++) {
    if (nums[i] !== 0) {
      	nums[j] = nums[i];
        j++;
      	continue;
    }
    
    zCount++;
  }
  
  
  while (zCount > 0 && j < nums.length) {
		nums[j] = 0;
    zCount--;
    j++;
  }
  
  return nums;
};

