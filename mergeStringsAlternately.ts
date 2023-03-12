function mergeAlternately(word1: string, word2: string): string {
    let ans: string = '';
    let i = 0;

    while (i < word1.length || i < word2.length) {
        if (word1[i]){
            ans += word1[i]
        }
        if (word2[i]){
            ans += word2[i]
        }
        i++
    }

    return ans
};