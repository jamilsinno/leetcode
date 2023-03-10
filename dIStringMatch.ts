function diStringMatch(s: string): number[] {
    let permI:number = 0;
    let permD:number = s.length
    let ans:number[] = [];
    let i = 0

    while(ans.length  < s.length + 1) {
        if (s[i] === 'I') {
            ans.push(permI)
            permI++
        } else {
            ans.push(permD)
            permD--
        } 
        i++
    }

    return ans
};