function freqAlphabets(s: string): string {
    let ans: string = '';

    for (let i = 0; i < s.length; i++) {
        if ( s[i+2] === '#' ) {
            ans += String.fromCharCode( 96 + Number(s[i] + s[i+1]) )
            i++
        } else if (s[i] !== '#') {
            ans += String.fromCharCode( 96 + Number(s[i]) )
        }
    }
    return ans
};