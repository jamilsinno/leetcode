// var buildArray = function(nums) {
//   let ans = []
//   for (let i = 0; i <= nums.length - 1; i++) {
//       ans.push(nums[nums[i]])
//   }  
// //   console.log(ans)
//   return ans
// };

var buildArray = function(nums) {
    let l = nums.length
    for(let i=0;i<nums.length;i++){
        // console.log(nums[i], i)
        nums[i]=nums[i]+(nums[nums[i]]%l)*l
        // console.log(nums[i], i)
    }
    for(let i=0;i<nums.length;i++){
        console.log(nums[i], i)
        nums[i]=Math.floor(nums[i]/l)
        console.log(nums[i], i)
    }
    return nums; 
};

console.log( buildArray([0,2,1,5,3,4]), [0,1,2,4,5,3]) 