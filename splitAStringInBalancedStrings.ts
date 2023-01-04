function balancedStringSplit(s: string): number {
    let balance:number = 0;
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "L") {
            balance += 1
        } else {
            balance -= 1
        }

        if (balance === 0) {
            count += 1
        }
    }
    return count
};