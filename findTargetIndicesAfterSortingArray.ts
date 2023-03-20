function targetIndices(nums: number[], target: number): number[] {
    let list: number[] = [];

    nums.sort((a,b) => a -b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            list.push(i)
        }
    }

    return list
};