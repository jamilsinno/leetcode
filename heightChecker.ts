function heightChecker(heights: number[]): number {
    const newArr: number[] = [...heights]
    heights.sort((a,b) => a - b)
    let count = 0;

    for (let i in heights) {
        if (newArr[i] !== heights[i]) {
            count++
        }
    }
    return count
};