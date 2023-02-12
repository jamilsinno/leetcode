function maxProduct(nums: number[]): number {
    let arr: number[] = nums.sort( (a,b) => a - b )
    return (arr[arr.length - 1] - 1) * (arr[arr.length-2] - 1)
};