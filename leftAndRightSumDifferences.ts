function leftRigthDifference(nums: number[]): number[] {
    let left: number[] = [0]
    let right: number[] = [0];
    let ans: number[] = [];

    for (let i = 0; i < nums.length - 1; i++){
        left.push(nums[i] + left[i])
        right.unshift(nums[nums.length - 1 - i] + right[right.length - 1 - i])
    }

    for (let i = 0; i < right.length; i++){
        ans.push(Math.abs(right[i] - left[i]))
    }

    return ans
};