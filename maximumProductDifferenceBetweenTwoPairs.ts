// We are going to be passed an array of numbers. The array numbers will be in random order. The array will only contain numbers. So we won't have to worry about any words being written out, nested arrays or objects.

// We need to return the product of the difference of the largest two numbers in the array minus -1 (each).

function maxProduct(nums: number[]): number {
    // Sort the array using a descending order
    let arr: number[] = nums.sort( (a,b) => b - a )

    // return the product of the first two elements with 1 subtracted from them
    return (arr[0] - 1) * ( arr[1] - 1 ) 
};
