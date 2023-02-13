// We are going to be passed two positive numbers. Both numbers will have common factors. A might be bigger than b or b might be bigger than a. We are not going to be passed any strings. We also are not being passed an array. We will also not be seeing any numbers with decimals. They will always be whole numbers.

// Return the total number of common factors between the two passed parameters.

function commonFactors(a: number, b: number): number {
    // Figure out which number between parameters a & b is smaller and assign that as your maximum common factor
    let maxCommonFactor: number = Math.min(a, b)
    // Create a variable to hold the total number of common factors you have
    let count: number = 0;

    // Iterate over all possible positive integers from 1 to maxCommonFactor and count all the common factors
    for (let i: number = 1; i <= maxCommonFactor; i++) {
        // Check to see if a or b divided by i is a whole number and if it is count it
        // console.log({a},{b},{i}, a % i, b % i)
        if  (a % i === 0 && b % i === 0) {
            count += 1;
        }
    }

    // Return the total count
    return count
};
