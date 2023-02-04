// We are being an array of numbers. The array will not contain any strings, nested arrays or objects.

// return the value of the maximum difference from any 4 numbers in the array.

function maxProductDifference(nums: number[]): number {
    // sort our array in ascending order
    let newNum: number[] = nums.sort( (a,b) => a-b )
    // console.log(newNum[newNum.length - 1], newNum[newNum.length - 2], newNum[0], newNum[1])
    return (newNum[newNum.length - 1] * newNum[newNum.length - 2]) - (newNum[1] * newNum[0])
};
