function sumOfUnique(nums: number[]): number {
    let hash = new Map();
    let ans = []

    for (let i in nums) {
        if (!hash.has(nums[i])) {
            hash.set(nums[i], hash[nums[i]] = 0)
        };
        hash.set(nums[i], hash[nums[i]]++)
    }

    for (const [key, value] of hash) {
        if(hash[key] === 1) {
            ans.push(key)
        }
    }
    
    return ans.reduce((pv,cv) => pv + cv, 0)
};