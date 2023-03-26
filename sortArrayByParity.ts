function sortArrayByParity(nums: number[]): number[] {
    let ans: number[] = [];
    let left = 0;
    let right = nums.length - 1;

    if (nums.length === 1) return nums;

    while (left <= right) {
        if (right !== left) {
            if(nums[left] % 2 === 0) {
                ans.unshift(nums[left])
            } else {
                ans.push(nums[left])
            }
        }
        
        if(nums[right] % 2 === 0) {
            ans.unshift(nums[right])
        } else {
            ans.push(nums[right])
        }
        left++
        right--
    }

    return ans
};