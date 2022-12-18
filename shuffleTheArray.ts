function shuffle(nums: number[], n: number): number[] {
    let ans: number[] = [];
    for (let i = 0; i < nums.length /  2; i++) {
        ans.push(nums[i]);
        ans.push(nums[i+n]);
    }
    return ans
};