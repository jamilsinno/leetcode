function restoreString(s: string, indices: number[]): string {
    let ans: string = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < indices.length; j++) {
            if (indices[j] === i) {
                ans += s[j]
                break
            }
        }
    }
    return ans
};