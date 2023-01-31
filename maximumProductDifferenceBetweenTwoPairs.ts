function maxProductDifference(nums: number[]): number {
    const arr = nums.sort( (a, b) => a - b )

    return (arr[arr.length-1] * arr[arr.length-2]) - (arr[0] * arr[1])
};