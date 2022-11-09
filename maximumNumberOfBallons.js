// Passed a string. In the string there are only lower case characters. No numbers, no special chars, no funny biz. 

// Return the number of times the string can form the word balloon. In the type of an integer.

var maxNumberOfBalloons = function(text) {
    // create a hashmap b, a, n once and l & o twice -> formed balloon
    let hashmap = {}
    let balloon = 'balloon'

    for(let i = 0; i<balloon.length; i++){
        if(!text.includes(balloon[i])){
            return 0
        }
    }
    // iterate over the string and store the key value pairs
    for (let i = 0; i<text.length; i++) {
        // if the key doesn't exist in the hashmap, create it, otherwise iterate over it
        if (!hashmap.hasOwnProperty(text[i])) {
            hashmap[text[i]] = 1
        } else {
            hashmap[text[i]]++
        }
    }
    // console.log(hashmap['l'], typeof hashmap['l'])
    // Return the total number of times you can form the word balloon
    return Math.min(hashmap['b'], hashmap['a'], Math.floor((hashmap['l'] / 2)), Math.floor(hashmap['o'] / 2), hashmap['n'])
};

console.log(maxNumberOfBalloons('balloon'), 1)
console.log(maxNumberOfBalloons('balballoonloon'), 2)
console.log(maxNumberOfBalloons('bahsdjfhsdlloon'), 1)
console.log(maxNumberOfBalloons('apple'), 0)