function repeatedNTimes(nums: number[]): number {
    let hash = new Map();

    for (let i in nums) {
        if (!hash.has(nums[i])){
            hash.set(nums[i], hash[nums[i]] = 0)
        }
        hash.set(nums[i], hash[nums[i]]++);
    }

    for (const [key, value] of hash){
        if (hash[key] === hash.size - 1){
            return key
        }
    }

    return 0
};