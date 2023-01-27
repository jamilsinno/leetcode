function xorOperation(n: number, start: number): number {
    let arr: number[] = [];

    for (let i: number = 0; i < n; i++) {
        arr[i] = start + 2 * i
    }

    return arr.reduce( (pv, cv) => pv ^ cv, 0 )
};