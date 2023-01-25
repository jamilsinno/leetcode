// Passed a string that contains alphanumeric characters. There will be no leading or trailing spaces. There will be no arrays or objects for us to worry about. There will always be at least one word for us to reverse in the string. 

// Return the same string but have every word reversed. Reverse the characters of each word while maintaining the original place in the string.

function reverseWords(s: string): string {
    // split each word that is passed in the string. 
    let ans: string[] = s.split(' ')

    // iterate over the whole string, and individually reverse every word
    for ( let i: number = 0; i < ans.length; i++ ) {
        ans[i] = ans[i].split('').reverse().join('')
    }
    // return the string separated by spaces again
    return ans.join(' ')
};