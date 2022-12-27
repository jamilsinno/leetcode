function smallerNumbersThanCurrent(nums: number[]): number[] {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]){
                count++
            }
        }
        ans.push(count)
    }
    return ans
};