4// We are going to be passed a number. Using this number we are supposed to find if there is a pivot integer

// If there a pivot integer, return it. If n is 1, return 1. If there is no pivot integer, then return -1. 

function pivotInteger(n: number): number {
    // Create a variable to hold your total sum
    let totalSum: number = 0;
    // Create a variable to hold your previous sum
    let previousSum: number = 0;

    // figure out the total sum
    for (let i: number = 1; i <= n; i++) {
        totalSum += i   
    }

    // Find out if the total sum is equal the previous sum plus the current index to find the pivot integer
    for (let i: number = 1; i <= n; i++) {
        console.log({totalSum}, previousSum + i, {previousSum}, i)
        if ( totalSum === previousSum + i ) {
            return i
        }
        totalSum -= i
        previousSum += i
    }

    // If any of the numbers aren't a pivot integer, return -1
    return -1
};
