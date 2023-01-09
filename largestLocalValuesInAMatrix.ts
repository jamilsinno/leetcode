function largestLocal(grid: number[][]): number[][] {
    let ans: number[][] = []

    for (let i:number = 0; i < grid.length - 2; i++) {
        let row: number[] = []
        for (let j:number= 0; j < grid[i].length - 2; j++) {
            row.push(Math.max(grid[i][j], grid[i][j+1], grid[i][j+2],
            grid[i+1][j], grid[i+1][j+1], grid[i+1][j+2],
            grid[i+2][j], grid[i+2][j+1], grid[i+2][j+2]))
        }
        ans.push(row)
    }
    return ans
};