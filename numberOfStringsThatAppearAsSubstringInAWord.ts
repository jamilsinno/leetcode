// We will be passed two parameters. The first parameter is an array of words. The second parameter is a word which we are using as a reference. We need to determine if the indices in the pattern array show up in the word string. In the array, we will only be met with strings. The order of the array does not matter. However, the contents of each word in the pattern array matter.

// If the patterns show up in the word string, then count it and return the total count.

function numOfStrings(patterns: string[], word: string): number {
    // Create a variable to hold your number
    let count: number = 0;

    // iterate over our loop and start comparing elements against the word parameter
    for (let i = 0; i < patterns.length; i++) {
        // Run your check for each indexed word in patters against the parameter word
        if ( word.includes(patterns[i]) ) {
            count += 1
        }
    }

    // return our total count
    return count
};
