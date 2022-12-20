function maximumWealth(accounts: number[][]): number {
    let max = 0;
    let comp = 0;

    for ( let i = 0; i < accounts.length; i++ ) {
        comp = accounts[i].reduce( (cv, pv) => pv + cv, 0)
        if (comp > max) {
            max = comp
        }
    }
    return max
};