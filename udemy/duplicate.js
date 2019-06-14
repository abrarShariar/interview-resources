/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      nums.sort();
  	if (nums.length === 1) {
        return false;
    }
  	else if (nums.length === 2 && nums[0] === nums[1]) {
        return true;
    }
  	
  	for (let i=0;i<nums.length-1;i++) {
      if (nums[i] === nums[i+1]) {
          return true;
       }
    }
  return false;
};
