function subtractProductAndSum(n: number): number {
    let arr = String(n).split('')

    return arr.reduce( (pv, cv) => pv * +cv, 1) - arr.reduce( (pv, cv) => pv + +cv, 0)
};