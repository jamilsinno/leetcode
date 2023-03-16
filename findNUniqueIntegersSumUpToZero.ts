function sumZero(n: number): number[] {
    let ans: number[] = n % 2 === 0? [] : [0];
    let i = 1;

    while (ans.length < n) {
        ans.push(i, -i)
        i++
    }

    return ans
};