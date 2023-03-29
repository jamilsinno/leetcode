function countNegatives(grid: number[][]): number {
    let count: number = 0;

    for (let i in grid) {
        for (let j in grid[i]) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }

    return count;
};