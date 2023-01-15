function deleteGreatestValue(grid: number[][]): number {
    let arr: number[] = []

    for(let k = 0; k <= grid.length; k++) {
        // create a placeholder array to compare each row's max value
        let temp: number[] = []
        for (let i = 0; i < grid.length; i++) {
            let max: number = 0;
            // iterate over the individual rows
            for (let j = 0; j < grid[i].length; j++) {
                max = Math.max(max, grid[i][j])
            }
            temp.push(max)
            grid[i].splice(grid[i].indexOf(max), 1)
            if(grid[i].length > 0){
                k = 0
            }
        }
        arr.push(Math.max(...temp))
    }
    return arr.reduce( (pv, cv) => pv + cv, 0)
};