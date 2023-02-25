function reversePrefix(word: string, ch: string): string {
    return word.slice(0,word.indexOf(ch) + 1).split('').reverse().join('') + word.slice(word.indexOf(ch) + 1, word.length)
};