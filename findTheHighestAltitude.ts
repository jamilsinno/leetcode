function largestAltitude(gain: number[]): number {
    let ans: number[] = [0]

    for (let i: number = 0; i < gain.length; i++) {
        ans.push(ans[i] + gain[i])
    }

    return Math.max(...ans)
};