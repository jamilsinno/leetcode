function replaceDigits(s: string): string {
    let ans: string = '';

    for (let i: number = 0; i < s.length; i++) {
        if ( i % 2 !== 0 ) {
            ans += String.fromCharCode( s[i-1].charCodeAt(0) + parseInt(s[i]) )
        } else {
            ans += s[i]
        }
    }
    return ans
};