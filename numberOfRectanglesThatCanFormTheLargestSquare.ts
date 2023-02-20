function countGoodRectangles(rectangles: number[][]): number {
    let arr: number[] = [];

    for (let i = 0; i < rectangles.length; i++) {
        let maxLen: number = Math.max(rectangles[i][0], rectangles[i][1])
        arr.push( Math.floor( (rectangles[i][0] * rectangles[i][1]) / maxLen ) )
    }

    let max: number = Math.max(...arr)
    return arr.filter( x => x === max ).length
};