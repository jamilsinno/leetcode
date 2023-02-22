function oddCells(m: number, n: number, indices: number[][]): number {
    let ans: number[][] = [];
    let count: number = 0;

    for (let i = 0; i < n; i ++) {
        let tempArr: number[] = []
        while (tempArr.length < m) {
            tempArr.push(0)
        }
        ans.push(tempArr)
    }

    for (const [r, c] of indices) {
        // update col
		for (let i = 0; i < n; i++) {
            ans[i][c]++
        };
		//update row
		for (let i = 0; i < m; i++) {
            ans[r][i]++
        };
    }

    ans.forEach( arr => {
        arr.forEach( x => x % 2 !== 0 ? count++ : count )
    });

    return count
}
