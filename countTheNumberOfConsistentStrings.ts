// We are passed two arguments. The argument labeled allowed will contain a string of strictly lowercase alphabet letters. The argument labeled words will be an array of strings. It is up to us to determine how many words in the array of strings are made up only allowed characters. The job is to determine the total number of consistent words.

// Return the total number of consistent words in the words array. 

function countConsistentStrings(allowed: string, words: string[]): number {
    // set a variable to determine how many consistent words there are
    let counter: number = 0;

    // iterate over the loop and determine which characters aren't in the allowed string
    for (let i: number = 0; i < words.length; i++) {
        // use a secondary loop to iterate over the individual words (strings) inside of the words array
        for ( let j: number = 0; j < words[i].length; j++ ) {
            console.log(words[i], words[i][j], {i}, {j}, {counter})
            // check to see if any of the characters in words[i] don't show up in the variable allowed
            if (!allowed.includes(words[i][j])) {
                counter += 1
                break
            }
        }
    }
    console.log(words.length, counter)
    // allowed words = total words - disallowed words
    // return the total number of allowed words using the difference
    return words.length - counter
};