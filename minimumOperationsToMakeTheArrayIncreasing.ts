function minOperations(nums: number[]): number {
    let count: number = 0;

    for (let i: number = 1; i < nums.length; i++) {
        while (nums[i] < nums[i-1] + 1) {
            nums[i]++
            count++
        }
    }

    return count
};