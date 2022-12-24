function smallestEvenMultiple(n: number): number {
    let newNum:number = n * 2

    if (n % 2 === 0 ) {
        newNum = newNum/2
    }

    return newNum
};