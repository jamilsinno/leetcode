var percentageLetter = function(s, letter) {
    // Create a variable to hold the count
    let count = 0
    // Iterate over the string and add to the count if the index matches the letter.
    for (let i = 0; i < s.length; i++) {
      // Use a conditional to check the index against the letter
      if (s[i] === letter) {
        count++
      }
    }
    // Divide the count by the length of the string and return the number rounded down.
    return Math.floor(count/s.length * 100)
};