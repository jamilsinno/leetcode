function countConsistentStrings(allowed: string, words: string[]): number {
    let count:number = 0;

    for ( let i: number = 0; i < words.length; i++ ) {
        for ( let j: number = 0; j < words[i].length; j++ ) {
            if(!allowed.includes(words[i][j])) {
                count += 1;
                break
            }
        }
    }
    return words.length - count
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])) // 2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])) // 7