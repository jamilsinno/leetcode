// We are passed 4 arguments. The first argument will be an array of numbers. We should take the array in its original form and we will not be mutating it. Run a check based on the constraints and determine whether the values and their respective indices make up a good triplet. In our array we will not be being passed any alphabetical characters, special characters, nested arrays or nested objects.

// If you come across a good triplet, count and return the total count.

function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    // create a variable to hold your total count.
    let count: number = 0;

    // iterate over the entire array.
    for (let i: number = 0; i < arr.length - 2; i++) {
        // iterate over the loop and find the first comparison
        for (let j: number = i + 1; j < arr.length - 1; j++) {
            // iterate over the loop and find the second comparison
            for (let k: number = j + 1; k < arr.length; k++) {
                if ( Math.abs( arr[i] - arr[j] ) <= a && Math.abs( arr[j] - arr[k] ) <= b && Math.abs( arr[i] - arr[k] ) <= c) {
                    count += 1;
                }
            }
        }
    }

    // return the total count
    return count
};
