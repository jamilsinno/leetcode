function squareIsWhite(coordinates: string): boolean {
    let ans = +parseInt(coordinates[0], 36) - 9 + +coordinates[1]
    return ans % 2 !== 0
};