function pivotInteger(n: number): number {
    if ( n === 1 ) return 1
    let totalSum: number = 0;
    let previousSum: number = 0

    for (let i: number = 1; i <= n; i++) {
        totalSum += i
    }

    for (let i: number = 1; i <= n; i++) {
        if (totalSum === previousSum+i) {
            return i
        }
        totalSum -= i
        previousSum += i
    }

    return -1
};