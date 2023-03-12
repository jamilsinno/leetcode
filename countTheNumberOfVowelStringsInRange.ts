function vowelStrings(words: string[], left: number, right: number): number {
    let string: string[] = 'aeiou'.split('');
    let count: number = 0;

    for (let i = left; i <= right ; i++) {
        if( string.includes(words[i][0]) && string.includes(words[i][words[i].length-1]) ) {
            count++;
        };
    };

    return count
};