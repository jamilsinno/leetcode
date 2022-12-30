function decompressRLElist(nums: number[]): number[] {
    let ans: number[] = [];

    for (let i = 0; i < nums.length; i += 2 ) {
        let arr: number[] = []
        for (let j = 0; j < +nums[i]; j++ ) {
            arr.push(nums[i+1]);
        }
        ans.push(...arr)
    }
    return ans
};