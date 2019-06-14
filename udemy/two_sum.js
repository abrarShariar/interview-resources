var twoSum = function(nums, target) {
  let comp = {};
	for (let i = 0;i< nums.length;i++) {
    let leftOver = target - nums[i];
    if (comp.hasOwnProperty(nums[i])) {
        return [comp[nums[i]], i];
    } 
    
    comp[leftOver] = i;
  }  
};

console.log(twoSum([2, 7, 11, 15], 9));

