function halvesAreAlike(s: string): boolean {
    let countR: number = 0;
    let countL: number = 0;
    let right: number = 0;
    let left: number = s.length - 1
    const vowels = 'aeiou'.split('')

    while (right < left){
        if (vowels.includes(s[right].toLowerCase())) {
            countR++
        }

        if(vowels.includes(s[left].toLowerCase())) {
            countL++
        }
        right++
        left--
    }

    return countR === countL
};