var maxSubArray = function(nums) {
	let max_current = nums[0];
  let max_global = nums[0];
  
  for (let i=1;i < nums.length;i++) {
    max_current = Math.max(nums[i], nums[i] + max_current);
    
    if (max_current > max_global) {
        max_global = max_current;
    }
  }
  
  return max_global;
};
