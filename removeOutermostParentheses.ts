// We are passed a string. The string is a valid parentheses string which means there will always be at least 1 set of outermost parentheses. These parentheses can be nested. The goal is to find all outermost parentheses and to remove them.

// Return the new string after every outermost parentheses has been removed. Do change the order of the string. 

function removeOuterParentheses(s: string): string {
    // A variable to hold our depth.
    let depth: number = 0;
    // Create a variable to hold your valid parentheses without mutating your original string
    let ans: string = '';

    // iterate over the string and find the valid parentheses
    for ( let i: number = 0; i < s.length; i++ ) {
        // check to see which set of parentheses we are on and if we have any depth
        if ( s[i] === '(' ) {
            if (depth) { // this is a truthy value check
                ans += s[i]
            }
            depth += 1
        } else if ( s[i] === ')' ) {
            depth -= 1
            if (depth) {
                ans += s[i]
            }
        }
    }

    // return the new string
    return ans
};