function finalValueAfterOperations(operations: string[]): number {
    let inc = '+';
    let count = 0;

    for (let i = 0; i < operations.length; i++ ) {
        if ( operations[i].includes(inc)) {
            count++
        } else {
            count--
        }
    }
    return count
};