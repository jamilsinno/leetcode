// Arguments only contain alphabet characters in upper and lower cases. No numbers, nested arrays or objects that we need to be concerned about.

function truncateSentence(s: string, k: number): string {
    // // split the string based on the common character in the string
    // let ans: string[] = s.split(' ');
    // // the first k number of elements and store into an array
    // let solution: string[] = ans.splice(0, k)
    // // return the solution in the form of a string
    // return solution.join(' ')

    return s.split(' ').splice(0, k).join(' ')
};