function sortString(string: string): string {
    let freq = new Map();
    let ans: string = '';

    for (let s of string) {
        freq.has(s) ? freq.set(s, freq[s]++) : freq.set(s, freq[s] = 1)
    }

    const temp = Object.entries(freq).sort((a, b) => a[0].localeCompare(b[0]));
    let i = 0;
    let direction = 1;
    while (ans.length < string.length && temp.length) {
        ans += temp[i][0];
        if (temp[i][1] > 1) {
            temp[i][1]--;
        } else {
            temp.splice(i, 1);
            i = i + (direction === 1 ? -1 : 0);
        }
        i += direction;
        if (i === -1 || i === temp.length) {
            direction = -direction;
            i += direction;
        }
    }
    return ans
};