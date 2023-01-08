function countDigits(num: number): number {
    let divisor: Array<string> = String(num).split('');
    let count: number = 0;

    for (let i = 0; i < divisor.length; i++) {
        if (num % +divisor[i] === 0) {
            count += 1
        }
    }
    return count
};