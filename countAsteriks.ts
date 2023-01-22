// We're being passed a string with alphanumeric characters. The characters can be upper/lower case. The string will contain | & * and the vertical bars indicate which asterik we need to count.

// return the total number of asteriks that fall outside of vertical bar pairs

function countAsterisks(s: string): number {
    let count: number = 0;
    let pair: boolean = false;

    // iterate over our loop, determine when you're outside of a pair of vertical bars and count those asteriks
    for (let i: number = 0; i < s.length; i++) {
        // check if you are in a pair
        if ( s[i] === '|' ) {
            pair = !pair
        }

        // Add to the total count if the asterik falls outside of a pair
        if ( s[i] === '*' && pair === false) {
            count += 1
        }
    }

    return count
};
