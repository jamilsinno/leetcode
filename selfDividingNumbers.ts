function selfDividingNumbers(left: number, right: number): number[] {
    let ans: number[] = [];

    for (let i = left; i <= right; i++) {
        let temp = parseInt(String(i));
        if (String(temp).split('').every(num => i % +num === 0)) {
            ans.push(i)
        }
    }
    return ans
};