function countAsterisks(s: string): number {
    let pair: boolean = false;
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            pair = !pair
        }
        if ( s[i] === '*' && pair === false ){
            count += 1
        }
    }
    return count
};