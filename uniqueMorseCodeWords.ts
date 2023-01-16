function uniqueMorseRepresentations(words: string[]): number {
    // create a map to assign alphabet letters to morse code
    let dict = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--..",
    }

    let ans: string[] = []

    // iterate over the array. Step into each element, iterate over the string. Replace the string with its morse code counter part. Join the string into its morse code equivalent. Step into the next element and repeat. Extract the number of unique morse code and return the size/length.
    for (let i = 0; i < words.length; i++) {
        // iterate over the string, replacing the current words with their morse counterparts
        ans.push(words[i].split('').map( x => dict[x]).join(''))
    }
    return new Set(ans).size
};