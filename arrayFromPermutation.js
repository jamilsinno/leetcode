var buildArray = function(nums) {
  let ans = []
  for (let i = 0; i <= nums.length - 1; i++) {
      ans.push(nums[nums[i]])
  }  
//   console.log(ans)
  return ans
};

console.log( buildArray([0,2,1,5,3,4]), [0,1,2,4,5,3]) 