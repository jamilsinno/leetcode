function generateTheString(n: number): string {
    let length: number = n % 2 === 0 ? n - 1 : n
    let ans:string = ''
    let i = 0;

    while (ans.length < n) {
        let letter = String.fromCharCode(97 + i)
        for (let j = 0; j < length; j++) {
            if (ans.length >= n) break
            ans += letter
        }
        i++
    }

    return ans
};