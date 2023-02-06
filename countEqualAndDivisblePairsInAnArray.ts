function countPairs(nums: number[], k: number): number {
    let counter: number = 0; 

    for (let i = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if ( nums[i] === nums[j] && (i * j) % k === 0 ) {
                counter += 1;
            }
        }
    }

    return counter
};