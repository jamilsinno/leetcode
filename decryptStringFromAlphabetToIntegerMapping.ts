// We are going to be passed a string. In this string there will be a combination of numbers and '#'. Numbers less than 10 will always be followed by another number. Numbers 10 and above will be followed by an '#'. We won't see any other characters in the string. The string will always be type string and there is no nesting happening

// Return the character equivalent of the string passed. 

function freqAlphabets(s: string): string {
    // Create a variable to hold the answer string.
    let ans: string = '';

    // Iterate over the original string
    for (let i:number = 0; i < s.length; i++) {
        // Find all of the '#' and concatenate the two numbers before them and convert them
        if (s[i + 2] === '#') {
            // console.log(s[i] + s[i+1], typeof s[i])
            ans += String.fromCharCode( 96 + Number(s[i] + s[i+1]) )
            i++
            // console.log(ans, i)
        } else if (s[i] !== '#') {
            ans += String.fromCharCode( 96 + Number(s[i]))
            // console.log(ans, i)
        }
    }
    // return the full ans
    return ans
};
