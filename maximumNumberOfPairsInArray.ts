function numberOfPairs(nums: number[]): number[] {
    let hash = new Map();
    let pairs = 0;

    for (let i in nums){
        if(hash[nums[i]]) {
            delete hash[nums[i]];
            pairs++
        } else {
            hash.set(nums[i], hash[nums[i]] = 1);
        }
    }
    return [pairs, Object.values(hash).length]
};