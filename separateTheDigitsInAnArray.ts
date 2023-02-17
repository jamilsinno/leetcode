// We are going to be passed an array of numbers. The array of numbers will consist of numbers up to 1000. There will be no alphabet character or special or characters or nested arrays. 

// We need return the array in the same order but have every digit separated into its own index. 

function separateDigits(nums: number[]): number[] {
    // turn the numbers in the array into a string
    // join the numbers into one large string and then split them
    // take the answer and turn it back into type number and return it
    return nums.map( el => String(el) ).join('').split('').map( el => Number(el) )
};
