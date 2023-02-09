// We are going to be passed an integer array. With this array there will also be variable k, a number which is  passed. What we need to do is find valid pairs that are equal and the product of their indices is divisible by k

// Return the total count of valid pairs found in the numbers array.

function countPairs(nums: number[], k: number): number {
    // Create a variable to hold your count in
    let count: number = 0;

    // iterate over our out loop
    for ( let i: number = 0; i < nums.length; i++ ) {
        // iterate to get the numbers we are comparing with
        for ( let j: number = i + 1; j < nums.length; j++ ) {
            // check your condition and if it passes add to your counter
            if ( (nums[i] === nums[j]) && ((i * j) % k === 0)) {
                count += 1;
            }
        }
    }

    // return the total count
    return count
};
