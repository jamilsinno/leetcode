// We are being passed an array with nested arrays containing either 0s or 1s. The nested arrays must remain remain in the same order. The original array being passed can be mutated. We don't have to concern ourselved with any special characters or alphabet letters. 

// We need to return a flipped image of the original image. Which means we need to take each row, reverse it and find the inverse.

function flipAndInvertImage(image: number[][]): number[][] {
    // create an array to hold all of your nested arrays
    let ans: number[][] = [];

    // iterate over the array
    for ( let i: number = 0; i < image.length; i++ ) {
        // create a temporary variable to hold the reversed and inversed nested array.
        let temp: number[] = [];
        // iterate over the nested array, and do your operations, and push them into the temporary array
        for ( let j: number = 0; j < image[i].length; j++ ) {
            // reverse the temporary array 
            // if ( image[i][j] === 0 ) {
            //     temp.unshift(1)
            // } else {
            //     temp.unshift(0)
            // }
            temp.unshift( image[i][j] ^ 1 )
        }
        // add the temp array to the answer
        // console.log( {ans}, {temp} )
        ans.push(temp)
    }
    // return the final answer
    return ans
};
