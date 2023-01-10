function arithmeticTriplets(nums: number[], diff: number): number {
    let count: number = 0;

    for (let i:number = 0; i < nums.length - 2; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k:number = j + 1; k < nums.length; k++) {
                    if( nums[k] - nums[j] === diff){
                        count += 1
                    }
                }
            }
        }
    }

    return count
};