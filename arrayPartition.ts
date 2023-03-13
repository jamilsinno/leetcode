function arrayPairSum(nums: number[]): number {
    nums.sort((a,b) => a - b);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i]
        }
    }
    
    return sum
};