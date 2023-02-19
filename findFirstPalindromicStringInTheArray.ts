function firstPalindrome(words: string[]): string {
    for (let i: number = 0; i < words.length; i++) {
        let left:number = 0;
        let right:number = words[i].length - 1

        while (left <= right + 1) {
            if (words[i][right] !== words[i][left]) {
                break
            } else if (left >= right) {
                return words[i]
            } else {
                left += 1
                right -= 1
            }
        }
    }

    return ''
};