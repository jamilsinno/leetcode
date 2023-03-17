function findGCD(nums: number[]): number {
    nums.sort((a,b) => a - b)
    let ans: number = 1;
    let i = 1;

    while ( i <= nums[0] ) {
        if (nums[nums.length - 1] % i === 0 && nums[0] % i === 0) {
            ans = i
        }
        i++
    }
    
    return ans
};