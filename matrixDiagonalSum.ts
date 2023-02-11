// function diagonalSum(mat: number[][]): number {
//     let sum = 0
//     let n = mat.length - 1
//     for (let i = 0; i <= n; i++) {
//         sum = sum + mat[i][i]
//         if (i !== (n - i)) {
//             sum +=  mat[i][n - i]
//         }
//     }
//     return sum
// };

// We are passed a matrix. A matrix is an array with nested arrays. Each nested array will represent a row in the matrix. The nested arrays will exclusively contain numbers. So we don't have to take into account any letters or special characters.

// We should return the total of the sum of a primary and a secondary diagonal in the matrix without having any overlapping numbers.

function diagonalSum(mat: number[][]): number {
    // Variable to hold our sum
    let sum: number = 0;
    let primary: number = 0;
    let secondary: number = 0
    // Variable to hold the length of the matrix and to use as a reference point to find our secondary diagonal values
    let matrixLength: number = mat.length - 1;

    // iterating over the matrix
    for (let i: number = 0; i < mat.length; i++) {
        // Build your primary diagonal
        primary = primary + mat[i][i]
        // Build your secondary diagonal
        if (i !== (matrixLength - i)) {
            secondary = secondary + (mat[i][matrixLength - i])
        }
        // console.log({primary}, {secondary})
    }

    // sum the primary and secondary diagonals
    sum = primary + secondary

    // return the total
    return sum
};
