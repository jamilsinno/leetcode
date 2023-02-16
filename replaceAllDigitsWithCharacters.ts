// We are going to be passed a string. In this string we have lowercase alphabet characters in every even index and a number in every odd index. The reason why we are given numbers is because we are supposed to replace the number with the respective letter in relation to the previous character.

// Return the new string in its original order. You can return a new string, it does not have to be the same variable being returned.

function replaceDigits(s: string): string {
    // Creating a variable to hold the answer
    let ans: string = '';
    // iterate over the original string (s) and find every number and replace it with a alphabet character
    for (let i: number = 0; i < s.length; i++) {
        // Check if the index is odd and transform the number to a character
        if (i % 2 !== 0) {
            // take the element before s[i-1] and make it into its number equivalent in JS and add it to the number in the current index to find the new character substitution.
            ans += String.fromCharCode( s[i-1].charCodeAt(0) + parseInt(s[i]) )
        } else {
            ans += s[i]
        }
    }

    // return the new string
    return ans
};
