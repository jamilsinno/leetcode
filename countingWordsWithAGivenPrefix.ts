function prefixCount(words: string[], pref: string): number {
    let count: number = 0;
    
    for (let i in words) {
        // console.log(words[i], i, pref, words[i].slice(0, pref.length))
        if (words[i].slice(0, pref.length) === pref) {
            count += 1
        }
    }

    return count
};