function diagonalSum(mat: number[][]): number {
    let sum = 0
    let n = mat.length - 1
    for (let i = 0; i <= n; i++) {
        sum = sum + mat[i][i]
        if (i !== (n - i)) {
            sum +=  mat[i][n - i]
        }
    }
    return sum
};